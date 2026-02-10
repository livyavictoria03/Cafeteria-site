const imagemGrande = document.getElementById("imagemGrande");
const miniaturas = document.querySelectorAll(".miniaturas img");

miniaturas.forEach(miniatura => {
  miniatura.addEventListener("click", () => {
    imagemGrande.src = miniatura.src;
    imagemGrande.alt = miniatura.alt;
  });
});
