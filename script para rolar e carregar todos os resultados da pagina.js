
// Função assíncrona para rolar a página e carregar todos os resultados de conexões
async function scrollAndLoadAllConnections() {
    // Armazena a altura anterior da página para detectar mudanças
    let lastHeight = 0;

    // Contador de tentativas seguidas sem carregar mais conteúdo
    let retries = 0;

    // Loop infinito para continuar rolando até não haver mais conteúdo novo
    while (true) {
        // Rola até o final da página
        window.scrollTo(0, document.body.scrollHeight);

        // Espera 2 segundos para o conteúdo carregar
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Seleciona todos os elementos <button> da página
        let buttons = document.querySelectorAll('button');

        // Procura entre os botões um que tenha o texto "Exibir mais resultados"
        let showMoreButton = Array.from(buttons).find(btn => btn.innerText.includes("Exibir mais resultados"));

        // Se encontrou o botão "Exibir mais resultados", clica nele
        if (showMoreButton) {
            console.log("Clicando no botão 'Exibir mais resultados'...");
            showMoreButton.click();

            // Espera mais 2 segundos para o novo conteúdo carregar
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Reseta o contador de tentativas porque teve progresso
            retries = 0;
        }

        // Verifica se a altura da página mudou após o scroll
        let newHeight = document.body.scrollHeight;

        // Se a altura não mudou, a página aparentemente não carregou mais conteúdo
        if (newHeight === lastHeight) {
            retries++; // Conta uma tentativa sem progresso

            // Se ocorrer 3 vezes seguidas sem mudança, assume que chegou ao fim da lista
            if (retries >= 3) {
                console.log("Chegou ao final da lista de conexões!");
                break; // Encerra o loop
            }
        } else {
            // Se a altura mudou, significa que mais conteúdo foi carregado
            retries = 0; // Reseta o contador de tentativas
        }

        // Atualiza a altura para a próxima verificação
        lastHeight = newHeight;
    }
}

// Executa a função para iniciar o processo
scrollAndLoadAllConnections();
