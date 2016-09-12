var updateBackground = function(image){
    document.querySelector("html").style.backgroundImage = image;
    document.querySelector("#message").innerHTML = "";
    document.getElementById("city-type").value = "";
};
 
var search = function(){
    console.log("update button clicked");
    
    //store input text and make it lowercase and get rid of all white spaces
    var city = document.getElementById("city-type").value.toLowerCase().split(" ").filter(i => i !== "").join("");                console.log(city);
    
    //check if input text is new york, new york city or, nyc
    
    if (city == "newyork" || city == "newyorkcity" || city == "nyc"){
        
        //change background to new york background
        updateBackground("url(../starter_code/images/nyc.jpg)");
    }
    
    //check if input text is san francisco, sf or, bay area
    else if(city == "sanfrancisco" || city == "sf" || city == "bayarea"){
        
        //change background to san francisco background
        updateBackground("url(../starter_code/images/sf.jpg)");
    }
    
    //check if input text is los angeles, la or, lax
    else if(city == "losangeles" || city == "la" || city == "lax"){
        
        //change background to los angeles background
        updateBackground("url(../starter_code/images/la.jpg)");
    }
    //check if input text is austin or atx
    else if(city == "austin" || city == "atx"){
        
        //change background to austin background
        updateBackground("url(../starter_code/images/austin.jpg)");
    }
    //check if input text is sydney or syd
    else if(city == "sydney" || city == "syd"){
        
        //change background to sydney background
        updateBackground("url(../starter_code/images/sydney.jpg)");
    }
    //check if inut text is empty
    else if(city == ""){
        
        //prompt user to enter a city name
        document.querySelector("#message").innerHTML = "Enter a city name";
        document.getElementById("city-type").value = "";
        }
    //if conditions are not satisfied
    else{
        //tell user that the image is not found
        document.querySelector("#message").innerHTML = "CITIpix not found";
        document.getElementById("city-type").value = "";
    }
};

//add a click listener to update button

document.getElementById("submit-button").addEventListener("click", search);
//using switch statement
/**document.getElementById("submit-button").addEventListener("click", function(){
                var city = ddocument.getElementById("city-type").value.toLowerCase().split(" ").filter(i => i !== "").join("");
                console.log("update button clicked", city.value);
                switch(city){
                    case "newyork":
                    case "newyorkcity":
                    case "nyc":
                        document.querySelector("html").style.backgroundImage = "url(../starter_code/images/nyc.jpg)"
                        document.querySelector("#message").innerHTML = "";
                        break;
                    case "sanfrancisco":
                    case "sf":
                    case "bayarea":
                        document.querySelector("html").style.backgroundImage = "url(../starter_code/images/sf.jpg)"
                        document.querySelector("#message").innerHTML = "";
                        break;
                    case "losangeles":
                    case "la":
                    case "lax":
                        document.querySelector("html").style.backgroundImage = "url(../starter_code/images/la.jpg)"
                        document.querySelector("#message").innerHTML = "";
                        break;
                    case "sydney":
                    case "syd":
                        document.querySelector("html").style.backgroundImage = "url(../starter_code/images/sydney.jpg)"
                        document.querySelector("#message").innerHTML = "";
                        break;
                    case "austin":
                    case "atx":
                        document.querySelector("html").style.backgroundImage = "url(../starter_code/images/austin.jpg)"
                        document.querySelector("#message").innerHTML = "";
                        break;
                    case "":
                        document.querySelector("#message").innerHTML = "Enter a city name";
                        break;
                    default:
                        document.querySelector("#message").innerHTML = "CITIpix not found";
                }
            });**/