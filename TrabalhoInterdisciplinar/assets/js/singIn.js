document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Chamada à API para validar o login
        const loginResponse = await fetch(`http://localhost:3000/api/client/${email}/${password}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!loginResponse.ok) {
            throw new Error("Erro no login. Verifique suas credenciais.");
        }

        // Ler a resposta do login apenas uma vez
        const loginData = await loginResponse.json();

        // Verificar se os dados do login são válidos
        if (!loginData) {
            throw new Error("Erro no login. Verifique suas credenciais.");
        }

        // Se o login for bem-sucedido, buscar dados do cliente
        // (supondo que os dados do cliente sejam retornados na resposta de login)
        const clientData = loginData; // Use os dados do login para os dados do cliente

        // Armazenar dados no localStorage
        localStorage.setItem("clientData", JSON.stringify(clientData));

        // Redirecionar para a dashboard
        window.location.href = "home.html";
    } catch (error) {
        console.error("Erro:", error.message);
        alert(error.message); // Opcional: mostra uma mensagem de erro ao usuário
    }
});
