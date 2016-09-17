function changeBackground() {
    var cityName = document.querySelector("#city-type").value.toLowerCase()
    if (cityName === "nyc" || cityName === "new york city") {
        document.body.classList.add("nyc");
    } else if (cityName === "sf" || cityName === "san francisco") {
        document.body.classList.add("sf");
    } else if (cityName === "la" || cityName === "los angeles") {
        document.body.classList.add("la");
    } else if (cityName === "austin") {
        document.body.classList.add("austin");
    } else if (cityName === "sydney") {
        document.body.classList.add("sydney");
    }
}

document.querySelector("#submit-btn").addEventListener('click', changeBackground);
