function fazerLogin() {
    // Simulação de um processo de autenticação (substitua isso pelo seu processo real)
    const tipoDeUsuario = document.getElementById("tipoDeUsuario").value;

    if (tipoDeUsuario === "admin") {
        // Redirecionar o usuário para a página do administrador
        window.location.href = "pag_adm.html";
    } else if (tipoDeUsuario === "usuario_comum") {
        // Redirecionar o usuário para a página do usuário comum
        window.location.href = "formulario.html";
    } else {
        alert("Tipo de usuário desconhecido.");
    }
}