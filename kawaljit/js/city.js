var bodybg = document.querySelector('body')
var button = document.querySelector('#submit-button');

function clearField() {
  var city = document.querySelector('#city-type')
  city.value = ''
}

button.addEventListener('click',
  function () {
    event.preventDefault();
    var city = document.querySelector('#city-type').value.toLowerCase();

    if (city === 'austin' || city === "atx") {
      // do something
      bodybg.style.background = 'url(images/austin.jpg)'
    } else if (city === 'la' || city === "los angeles" || city === "lax") {
        bodybg.style.background = 'url(images/la.jpg)'
    } else if (city === 'new york' || city === 'new york city' || city === 'nyc') {
      bodybg.style.background = 'url(images/nyc.jpg)'
    } else if (city === "san francisco" || city === 'sf' || city === 'bay area') {
      bodybg.style.background = 'url(images/sf.jpg)'
    } else if (city === "sydney" || city === "syd") {
      bodybg.style.background = 'url(images/sydney.jpg)'
    } else {
      clearField()
      return
    }

    clearField()
  }
)
