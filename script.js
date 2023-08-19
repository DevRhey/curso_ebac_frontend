$(document).ready(function () {
  $("#cadastrar").click(function () {
    $("form").slideDown();
  });

  $("#cancelar").click(function () {
    $("form").slideUp();
  });

  $("#btn1").click(function (e) {
    e.preventDefault();
    const addNovaTarefa = $("#tarefa").val();
    if (addNovaTarefa === "") {
      alert("Digite uma tarefa!");
    } else {
      const addItem = $("<li></li>").append(`<p>${addNovaTarefa}</p>`);
      $("ul").append(addItem);
      $("#tarefa").val("");
    }
  });

  $("ul").on("click", "li", function () {
    $(this).css("text-decoration", "line-through");
    $(this).css("color", "red");
  });

  $("#btn2").click(function () {
    $("#lista-tarefa").empty();
    alert("Lista de tarefas apagada!");
  });
});
