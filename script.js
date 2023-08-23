$(document).ready(function () {
  $("#telefone").mask("(00) 0000-0000", { placeholder: "(00) 0000-0000" });
  $("#cpf").mask("000.000.000-00", { placeholder: "000.000.000-00" });
  $("#cep").mask("00000-000", { placeholder: "00000-000" });
  $("#data").mask("00/00/0000", { placeholder: "00/00/0000" });

  $("form").validate({
    rules: {
      nome: { required: true },
      email: { required: true, email: true },
      telefone: { required: true },
      mensagem: { required: true },
    },
    messages: {
      nome: "Campo obrigatório",
      email: "Campo obrigatório",
      telefone: "Campo obrigatório",
      cpf: "Campo obrigatório",
    },
    submitHandler: function (form) {
      alert("Formulário enviado");
    },
    invalidHandler: function (event, validator) {
      let camposIncorretos = validator.numberOfInvalids();
      if (camposIncorretos) {
        alert("Existem campos incorretos");
      }
    },
  });
});
