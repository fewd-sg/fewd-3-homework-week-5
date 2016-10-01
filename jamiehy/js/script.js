// console.log('test')

// retrieve the user's entry


var button = $("#submit-button")

button.click(function(){
  var cityType = $("#city-type").val()
  // console.log(cityType)
  if (cityType === "New York" || cityType === "New York City" || cityType === "NYC" ) {
    $('body').attr('class', 'nyc')
  } else if (cityType === "San Francisco"|| cityType === "SF" || cityType === "Bay Area") {
    $('body').attr('class', 'sf')
  } else if (cityType === "Los Angeles" || cityType === "LA" || cityType === "LAX") {
    $('body').attr('class', 'la')
  } else if (cityType === "Austin" || cityType === "ATX") {
    $('body').attr('class', 'austin')
  } else if (cityType === "Sydney" || cityType === "SYD") {
    $('body').attr('class', 'sydney')
  } else {
    $('body').attr('class', '')
  }
})
