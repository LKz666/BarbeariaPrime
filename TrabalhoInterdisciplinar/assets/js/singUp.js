document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Captura os dados do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const tipoUsuario = document.querySelector("input[name='tipo_usuario']:checked").value;
        const cpf = document.getElementById("cpf").value;
        const cep = document.getElementById("cep").value;

        // Configuração dos dados para o envio na API
        const data = {
            nome: nome,
            email: email,
            senha: senha,
            tipo_usuario: tipoUsuario,
            cpf: cpf,
            cep: cep,
        };

        try {
            // Realiza a requisição para a API
            const response = await fetch("http://localhost:3000/api/client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            // Verifica a resposta da API
            if (response.ok) {
                // Redireciona para a página de login em caso de sucesso
                window.location.href = "singIn.html";
            } else {
                // Lida com o erro se o cadastro falhar
                const errorData = await response.json();
                alert("Erro no cadastro: " + errorData.message);
            }
        } catch (error) {
            // Lida com erros de rede ou outros problemas
            console.error("Erro ao fazer a requisição:", error);
            alert("Erro ao conectar com o servidor.");
        }
    });
});
