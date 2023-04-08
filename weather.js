function getWeather() {
  // Acá procedemos a obtener la ciudad ingresada por el usuario
  var city = document.getElementById("city").value;

  // Acá procedemos a hacer la solicitud HTTP a la API de OpenWeatherMap
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=89870eccdcc08f8319385ee5199052af", true);
  xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          
        // Acá Procesamos los datos del clima y se muestran en la página
          var data = JSON.parse(xhr.responseText);
          var weather = document.getElementById("weather");
          weather.innerHTML = "El Clima actual en " + data.name + " es: " + data.weather[0].description;
      } else {
        // Acá tendremos un mensaje de error que se  Mostrará si no se puede obtener el clima
          var weather = document.getElementById("weather");
          weather.innerHTML = "Ups! No se pudo obtener el clima, por favor verifique la cuidad ingresada";
      }
  };
  xhr.send();
}
