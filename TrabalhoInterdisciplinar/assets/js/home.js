const userProfile = document.querySelector('#userInfo');
const url = 'http://localhost:3000/api/client';

fetch(url)
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(post => {
            output += `
                <div class="user-welcome">
                    <span>Bem Vindo, ${post.name}</span>
                </div>
                <div class="user-icon">
                    <img src="assets/img/user-icon.png" alt="User Icon" class="user-image">
                </div>`;
        });
        userProfile.innerHTML = output; // Insere o conteúdo gerado na classe .user-info
    })
    .catch(error => console.error('Erro ao buscar os dados:', error));
