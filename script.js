function toggleMode() {
  const html = document.documentElement /*representação do nosso documento e acessando a suas propriedades no caso acessando o html pleo documentElement */
  html.classList.toggle("light")

  /*if(html.classList.contains("light")) {
    html.classList.remove("light") /*Adiciona a classe */
  /*} else {
    html.classList.add("light") /*Remove a classe */ 
  /*} */
  
  
}