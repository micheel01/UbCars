document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulario

    // Simula o envio do formulário 
    // Mostra a Notificação
    exibirNotificacao();

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
});

function exibirNotificacao() {
    var notificacao = document.getElementById("notificacao");
    notificacao.style.display = "block";

    // Esconde a notificação após 3 segundos 
    setTimeout(function() {
        notificacao.style.display = "none";
    }, 3000); // ta em ms
}
