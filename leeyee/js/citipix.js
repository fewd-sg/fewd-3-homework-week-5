$(document).ready(function() {
  //add "Click" event when user clicks on #submit-button
  document.getElementById("submit-button").addEventListener("click", function(){
    //prevent form submission
    event.preventDefault();
    //store and retrieve user input using var city
    //remove extra spacing or new lines using .trim and replace
    //toLowerCase to ignore lower or uppercase of what user submitted
    var city = $.trim($('#city-type').val().toLowerCase().replace(/^\s+|\s+$/g,""));
    //reset the user input field after it is submitted
    $('#city-type').val('');
    //change the background image based on what user submitted
    if (city=="new york" || city=="new york city" ||
    city=="nyc")
    {
      $('body').attr('class','nyc');
    }
    else if (city=="san francisco" || city=="sf" || city=="bay area")
    {
      $('body').attr('class','sf');
    }
    else if (city=="los angeles" || city=="la" || city=="lax"){
      $('body').attr('class','la');
    }
    else if (city=="austin" || city=="atx"){
      $('body').attr('class','austin');
    }
    else if (city=="sydney" || city=="syd"){
      $('body').attr('class','sydney');
    }
  });
});
