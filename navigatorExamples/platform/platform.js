const platform = navigator.platform

const body = document.querySelector("body")
const p = document.createElement("p")

p.textContent = `Your platform is: ${platform}`

body.appendChild(p)