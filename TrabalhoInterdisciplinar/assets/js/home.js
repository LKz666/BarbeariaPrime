const userProfile = document.querySelector('#userInfo');

const clientData = localStorage.getItem('clientData');

if (clientData) {

    const user = JSON.parse(clientData);
    
    const output = `
        <div class="user-icon">
            <img src="assets/img/user-icon.png" alt="User Icon" class="user-image">
        </div>
        <div class="user-welcome">
            <span>Bem Vindo, ${user.nome}</span>
        </div>`;
    
    userProfile.innerHTML = output;
} else {
    console.error('Nenhum dado encontrado no localStorage.');
}
