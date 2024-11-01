document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const loginResponse = await fetch(`http://localhost:3000/api/client/${email}/${password}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (!loginResponse.ok) {
            throw new Error("Erro no login. Verifique suas credenciais.");
        }

        const loginData = await loginResponse.json();

        if (!loginData) {
            throw new Error("Erro no login. Verifique suas credenciais.");
        }

        const clientData = loginData;

        localStorage.setItem("clientData", JSON.stringify(clientData));

        window.location.href = "home.html";
    } catch (error) {
        console.error("Erro:", error.message);
        alert(error.message);
    }
});
