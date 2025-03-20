document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegando os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Simulando um login (substitua pela lógica real, como API)
    if (username === "usuario" && password === "senha123") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar ou mudar a tela
        window.location.href = "home.html"; // Exemplo de redirecionamento
    } else {
        errorMessage.textContent = "Nome de usuário ou senha inválidos.";
    }
});
 