let expressao = "";
            
            function botao(id) {
                // Captura os elementos da tela
                const telaOperacao = document.getElementById('telaOperacao');
                const telaResultado = document.getElementById('telaResultado');

                // Mapeamento: ID do HTML -> Valor matemático
                const valores = {
                    'zero': '0', 
                    'um': '1',
                    'dois': '2',
                    'tres': '3',
                    'quatro': '4',
                    'cinco': '5',
                    'seis': '6',
                    'sete': '7',
                    'oito': '8',
                    'nove': '9',
                    'somar': '+',
                    'subtrair': '-',
                    'multiplicar': '*',
                    'dividir': '/',
                    'ponto': '.',
                    'porcento': '/100'
                };

                if (id === 'limpar') {
                    expressao = "";
                    telaOperacao.innerText = " ";
                    telaResultado.innerText = " ";
                } 
                else if (id === 'apagar') {
                    expressao = expressao.slice(0, -1);
                    telaOperacao.innerText = expressao || "0";
                } 
                else if (id === 'igual') {
                    try {
                        // eval() calcula a string. Ex: "2+2" vira 4
                        let resultado = eval(expressao);
                        telaResultado.innerText = resultado;
                    } catch (e) {
                        telaResultado.innerText = " ";
                    }
                } 
                else if (valores[id]) {
                    // Se o ID clicado existir no mapa 'valores', adiciona à conta
                    expressao += valores[id];
                    telaOperacao.innerText = expressao;
                }
            }
