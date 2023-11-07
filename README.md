# Battery API

- A small scale application will utilises the [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) to show the client whether their charger is currently connected. 

- The purpose of this application is to demonstrate the differences in APIs in a visual, fun and interesting way. 

## How to run
Simply clone down the repository and load the `index.html` file in your browser and plug/unplug your charger. 


## Interest
The application works due to the Navigator object which provides information about the application's environment and user agent. 

Generally the **navigator** contains infomration relating to the browser and the device on which the code is running. 

In this exampe we access information about the battery. Other examples could be:
- `geolocation`

- `userAgent`
- `language`
- `platform`

**NOTE** 
The *user agent* is a string the browser sends to a website or application to identify itself, often containing information about browser name, version number, operating system etc. 



## Battery

On the BatteryManager object inside `"./index.js"` we have access to a series of different pieces of information.
- `charging` - Boolean
    - Whether battery is being charged
- `chargingTime` - Integer
    - Time remianing in seconds until the battery is fully charged
- `dischargingTime` - Integer
    - Time remaining in seconds until battery is fully discharged
- `level` - Integer
    - A value between 0 and 1 indicating the percentage of battery
- `onchargingchange` - Callback Function
    - Set to execute when the `charging` property changes


### Geolocation 

This property provides access to the Geolocation API, allowing us to retrieve info on the current geolocation information. 
```js
navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude)
})
```

### UserAgent
This property returns the user agent string for the current browser.
```js
const userAgent = navigator.userAgent
```

### Language
This property returns a string representing the preferred language of the user.
```js
const userLanguage = navigator.language
```

### Platform
This property returns a string representing the platform of the browser. (such as "Win32" for Wundows or "MacIntenl")
```js
const platform = navigator.platform
```
