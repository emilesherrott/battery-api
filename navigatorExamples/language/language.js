const userLanguage = navigator.language

const body = document.querySelector("body")
const p = document.createElement("p")

p.textContent = `Your default language is: ${userLanguage}`

body.appendChild(p)