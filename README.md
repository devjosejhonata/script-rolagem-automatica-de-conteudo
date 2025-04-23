Este script é utilizado em páginas da web (criado especialmente para utilizar no LinkedIn, porem sendo possível utilizar em outros locais, paginas que carregam dados via scroll) onde os resultados são carregados dinamicamente à medida que você rola a página. Ele automatiza esse processo:

- Rola até o final da página;
- Procura por botões como “Exibir mais resultados” e clica neles; 
- Aguarda carregamento;
- Repete até perceber que não há mais conteúdo novo sendo adicionado;

🔧 Onde e como usar:

- Pode ser usado no console do navegador (F12 → aba Console) enquanto está em uma página com carregamento dinâmico;
- Ideal para páginas onde você quer carregar todos os itens antes de fazer uma extração de dados;

✅ Resumo de Lógica

- Scrolla até o fim da página;
- Espera um tempo para o conteúdo carregar;
- Procura e clica no botão "Exibir mais resultados", se existir;
- Verifica se mais conteúdo foi realmente carregado (checando altura da página);
- Repete o processo até que por 3 vezes seguidas não apareça mais nada novo;
- Encerra o processo com uma mensagem;

