document.getElementById("submeter").addEventListener("click", function () {
  const numA = parseFloat(document.getElementById("valor-A").value);
  const numB = parseFloat(document.getElementById("valor-B").value);

  if (isNaN(numA) || isNaN(numB)) {
    alert("Por favor, insira valores numéricos válidos.");
  } else {
    if (numB > numA) {
      alert("Validação ok");
    } else {
      alert("Falha na validação");
    }
  }
});
