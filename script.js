function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //html.classList.remove("light")
  //} else {
  //html.classList.add('light')
  //}
  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar2.png")
  } else {
    //se tiver sem light mode, manter a imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
  }



  const leg = document.querySelector("#profile img")

  //substituir a leg
  if (html.classList.contains("light")) {
    //se tiver light mode, mudar para legenda da segunda foto
    leg.setAttribute('alt', 'imagem de perfil de Luiz Rodrigues, olhando de cima para baixo')
  } else{
  //se tiver sem light mode, manter a legenda padrão
  leg.setAttribute(
    "alt",
    "imagem de perfil de Luiz Rodrigues, de óculos, olhando para o lado direito"
  )
  }
}