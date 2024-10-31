const userProfile = document.querySelector('#userInfo');

// Obter os dados do localStorage
const clientData = localStorage.getItem('clientData');

if (clientData) {
    // Parse o JSON
    const user = JSON.parse(clientData);
    
    // Cria o HTML de saída com o nome do usuário
    const output = `
        <div class="user-welcome">
            <span>Bem Vindo, ${user.nome}</span>
        </div>
        <div class="user-icon">
            <img src="assets/img/user-icon.png" alt="User Icon" class="user-image">
        </div>`;
    
    // Insere o conteúdo gerado na div #userInfo
    userProfile.innerHTML = output;
} else {
    console.error('Nenhum dado encontrado no localStorage.');
}
