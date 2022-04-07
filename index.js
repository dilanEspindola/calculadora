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

document.querySelector(".uno").addEventListener("click", () => {});

document.querySelector(".dos").addEventListener("click", () => {});

document.querySelector(".tres").addEventListener("click", () => {});
