function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Para trocar a imagem junto com a troca de tema
  // const img = document.querySelector("#profile img")

  // if (html.classList.contains("light")) {
  //   img.setAttribute("src", "./assets/avatar-light.png")
  // } else {
  //   img.setAttribute("src", "./assets/avatar.png")
  // }
}
