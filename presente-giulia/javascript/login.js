document.getElementById('btn-entrar').addEventListener('click', function() {
            // Captura o que foi digitado nos campos
            const usuarioDigitado = document.getElementById('usuario').value.trim();
            const senhaDigitada = document.getElementById('senha').value.trim();
            const erroContainer = document.getElementById('mensagem-erro');

            // Credenciais
            const usuarioCorreto = "Giulia Gabriella";
            const senhaCorreta = "220300";

            // Nome da página 
            const paginaDestino = "conteudo.html"; 

            // Validação
            if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
                window.location.href = paginaDestino;
            } else {
                // Se errar, mostra o aviso em vermelho
                erroContainer.style.display = "block";
            }
        });