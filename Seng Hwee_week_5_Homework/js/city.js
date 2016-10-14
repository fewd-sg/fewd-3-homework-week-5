
$(document).ready(function() {
 
  $('#submit-btn').click(function(){
  	
    
		var city = $('#city-type').val();

	    
	    // NYC
	    if(city == 'new york city' || city == 'nyc' || city == 'new york') {
	      $('body').attr('class','nyc');
	    }
	    
	    //SF
	    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
	      $('body').attr('class','sf');
	    }
	    //AUSTIN
	    else if (city == 'austin' || city == 'atx') {
	      $('body').attr('class','austin');
	    }
	    //LA
	    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
	      $('body').attr('class','la');
	    }
	    //SYDNEY
	    else if (city == 'sydney' || city == 'syd') {
	      $('body').attr('class','sydney');
		}
		
		return false;
  	})

})