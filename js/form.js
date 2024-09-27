document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário (não recarregará a página)

    // Simula o envio do formulário (você deve substituir isso pelo código de envio real)
    // Neste exemplo, apenas mostramos a notificação
    exibirNotificacao();

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
});

function exibirNotificacao() {
    var notificacao = document.getElementById("notificacao");
    notificacao.style.display = "block";

    // Esconde a notificação após 3 segundos (3000 milissegundos)
    setTimeout(function() {
        notificacao.style.display = "none";
    }, 3000); // 3000 ms = 3 segundos
}

//validar telefone
document.getElementById("telefone").addEventListener("blur", function() {
    validarTelefone(this);
  });

  function validarTelefone(input) {
    // Remove todos os caracteres não numéricos do valor do campo
    const telefone = input.value.replace(/\D/g, "");

    // Verifique se o número de telefone tem o formato desejado 
    if (telefone.length !== 11 ) {
      alert("O número de telefone deve ser válido");
      input.value = ""; // Limpa o campo
    }
  }