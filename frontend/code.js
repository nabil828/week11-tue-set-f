document.getElementById("weatherBtn")
  .addEventListener("click", async () => {
    let cityName = document.getElementById("cname").value;
    resp = await fetch(`http://localhost:3000/weather?city=${cityName}&units=metric`)
    respJson = await resp.json();
    console.log(respJson);
    document.getElementById("result").innerHTML = respJson.weather[0].description;
    document.getElementById("result").innerHTML += respJson.main.temp;
    document.getElementById("result").innerHTML += `<img src=" https://openweathermap.org/img/wn/${respJson.weather[0].icon}@2x.png">`;

  });