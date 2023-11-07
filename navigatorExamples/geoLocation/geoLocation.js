navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude)

    const body = document.querySelector("body")
    const latitude = document.createElement("p")
    const longitude = document.createElement("p")


    latitude.textContent = `Your longitude is: ${position.coords.latitude}`

    longitude.textContent = `Your longitude is: ${position.coords.longitude}`

    body.appendChild(latitude)
    body.appendChild(longitude)


})