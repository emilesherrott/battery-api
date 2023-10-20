const body = document.querySelector("body")
let battery = undefined

const getBatteryInfo = async () => {
  try {
    battery = await navigator.getBattery()
    battery.addEventListener("chargingchange", (e) => {
        chargingStatus()
    })
    
  } catch (error) {
    console.error(error)
  }
}

getBatteryInfo()

addEventListener("load", (e) => {
    chargingStatus()
})

const chargingStatus = () => {
    if (battery.charging) {
      body.classList.remove("draining")
      body.classList.add("charging")
    } else {
      body.classList.remove("charging")
      body.classList.add("draining")
    }
  }
  
