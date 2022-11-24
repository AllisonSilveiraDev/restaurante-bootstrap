$(document).ready(function () {
  $("#telefone").mask("(00) 0 0000-0000", {
    placeholder: "(__) _ ____-____",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      telefone: {
        required: false,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: " * Por favor, insira seu nome!",
      email: " * Por favor, insira seu e-mail!",
      mensagem: " * Por favor, insira sua mensagem!",
    },
  });
});
