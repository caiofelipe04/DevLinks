function toggleMode() {
  const body = document.body;
  body.classList.toggle("light");
  
  const img = document.querySelector("#profile img");

  if (body.classList.contains("light")) {
  img.setAttribute("src", "./Imagens/gojo1.jpg");
  } else {
    img.setAttribute("src", "./Imagens/gojo2.jpg");
  }

}