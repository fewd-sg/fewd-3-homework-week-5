function changeBG() {

  var cityType = document.querySelector('#city-type').value.toLowerCase().trim();
  if (cityType === "nyc" || cityType === "new york city" || cityType === "new york") {
    document.body.style.backgroundImage = "url('./images/nyc.jpg')";
  }

  else if (cityType === "san Francisco" || cityType === "sf" || cityType === "bay area") {
    document.body.style.backgroundImage = "url('./images/sf.jpg')";
  }

  else if (cityType === "los angeles" || cityType === "la" || cityType === "lax") {
    document.body.style.backgroundImage = "url('./images/la.jpg')";
    }

  else if (cityType === "austin" || cityType === "atx") {
    document.body.style.backgroundImage = "url('./images/austin.jpg')";
    }

  else if (cityType === "sydney" || cityType === "syd") {
    document.body.style.backgroundImage = "url('./images/sydney.jpg')";
    }

  else {
    document.body.style.backgroundImage = "url('./images/citipix_skyline.jpg')";
  }


}

function submitForm(){
  document.getElementById('cityForm').reset();

}



document.querySelector('#submit-btn').addEventListener('click', changeBG);
document.querySelector('#submit-btn').addEventListener('click', submitForm);
