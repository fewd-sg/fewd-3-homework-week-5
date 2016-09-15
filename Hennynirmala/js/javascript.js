var changeBg = function() {
 var cityType = document.querySelector('#city-type').value
 console.log(cityType)

 if (cityType === "austin") {
   document.querySelector('body').style.backgroundImage = 'url(images/austin.jpg)';
 }

 else if (cityType === "la") {
   document.querySelector('body').style.backgroundImage = 'url(images/la.jpg)';

 }

else if (cityType === "sf") {
  document.querySelector('body').style.backgroundImage = 'url(images/sf.jpg)';

}
else if (cityType === "sydney") {
  document.querySelector('body').style.backgroundImage = 'url(images/sydney.jpg)';

}
else if (cityType === "nyc") {
  document.querySelector('body').style.backgroundImage = 'url(images/nyc.jpg)';

}
/* get value from the input field */
