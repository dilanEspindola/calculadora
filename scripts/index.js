function reset() {
  document.querySelector("form").reset();
}

function borrar() {
  const pantallaInput = document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = pantallaInput.slice(
    0,
    pantallaInput.length - 1
  );
}
