const formulario=document.getElementById("clima")
formulario.addEventListener("submit",(event)=>{   //<----acá lo que hacemos es poder buscar con elenter y boton//
  // Acá procedemos a obtener la ciudad ingresada por el usuario
  var city = document.getElementById("city").value;
  event.preventDefault()
  // Acá procedemos a hacer la solicitud HTTP a la API de OpenWeatherMap
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=89870eccdcc08f8319385ee5199052af", true);
  xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Acá Procesamos los datos del clima y se muestran en la página
        var data = JSON.parse(xhr.responseText);
        var weather = document.getElementById("weather");
        // switch(data.weather[0].descritption){
        //   case "overcast clouds":
        //     weather.innerHTML = "El Clima actual en " + data.name + " es: cielo muy nublado";
        //   default: 
        //   weather.innerHTML = "El Clima actual en " + data.name + " es: " + data.weather[0].description;
        // break
      // }

      if (data.weather[0].description=="overcast clouds"){
        weather.innerHTML = "El Clima actual en " + data.name + " es: cielo muy nublado";
      } else if(data.weather[0].description=="broken clouds"){
        weather.innerHTML = "El Clima actual en " + data.name + " es: cielo parcialmente nublado";
      } else if(data.weather[0].description=="clear sky"){
        weather.innerHTML = "El Clima actual en " + data.name + " es: cielo despejado";    
      } else if (data.weather[0].description=="scattered clouds"){
        weather.innerHTML = "El clima actual en " + data.name + " es: nubes dispersas"
      }  else if (data.weather[0].description=="few clouds"){
        weather.innerHTML = "El clima actual en " + data.name + " es: pocas nubes"
      } else if (data.weather[0].description=="light rain"){
        weather.innerHTML = "El clima actual en " + data.name + " es: lluvia ligera"
      } else if (data.weather[0].description=="drizzle"){
        weather.innerHTML = "El clima actual en " + data.name + " es: lloviznas"
      } else if (data.weather[0].description=="moderate rain"){
        weather.innerHTML = "El clima actual en " + data.name + " es: lluvias moderadas"
      } else if (data.weather[0].description=="snow"){
          weather.innerHTML = "El clima actual en " + data.name + " es: nevada"
      } else if (data.weather[0].description=="light snow"){
        weather.innerHTML = "El clima actual en " + data.name + " es: nevada ligera"
      }//aca agrego otras condiciones//
      else {
        weather.innerHTML = "El Clima actual en " + data.name + " es: " + data.weather[0].description; 
      }
      
        console.log(data.weather[0].description)    
      } else {
        // Acá tendremos un mensaje de error que se  Mostrará si no se puede obtener el clima
          var weather = document.getElementById("weather");
          weather.innerHTML = "Ups! No se pudo obtener el clima, por favor verifique la cuidad ingresada";
      }
  };
  xhr.send();
})

function getWeather(event) {

}
