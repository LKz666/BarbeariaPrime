document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const tipoUsuario = document.querySelector("input[name='tipo_usuario']:checked").value;
        const cpf = document.getElementById("cpf").value;
        const cep = document.getElementById("cep").value;

        const data = {
            nome: nome,
            email: email,
            senha: senha,
            tipo_usuario: tipoUsuario,
            cpf: cpf,
            cep: cep,
        };

        try {
            const response = await fetch("http://localhost:3000/api/client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                window.location.href = "singIn.html";
            } else {
                const errorData = await response.json();
                alert("Erro no cadastro: " + errorData.message);
            }
        } catch (error) {
            console.error("Erro ao fazer a requisição:", error);
            alert("Erro ao conectar com o servidor.");
        }
    });
});
