document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Chamada à API para validar o login
        const loginResponse = await fetch("URL_DA_API_DE_LOGIN", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!loginResponse.ok) {
            throw new Error("Erro no login. Verifique suas credenciais.");
        }

        const loginData = await loginResponse.json();

        // Se login for bem-sucedido, buscar dados do cliente
        const clientResponse = await fetch("URL_DA_API_DADOS_DO_CLIENTE", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!clientResponse.ok) {
            throw new Error("Erro ao buscar dados do cliente.");
        }

        const clientData = await clientResponse.json();

        // Armazenar dados no localStorage
        localStorage.setItem("clientData", JSON.stringify(clientData));

        // Redirecionar para a dashboard
        window.location.href = "../../home.html";
    } catch (error) {
        console.error("Erro:", error.message);
        alert(error.message); // Opcional: mostra uma mensagem de erro ao usuário
    }
});
