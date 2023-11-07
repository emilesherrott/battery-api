const userAgent = navigator.userAgent

const body = document.querySelector("body")
const p = document.createElement("p")

p.textContent = `Your userAgent is: ${userAgent}`

body.appendChild(p)