const api = {
    key: "4461af3024e62217108219ee7f41dfb1",
    base: "https://api.openweathermap.org/data/2.5/weather?q="
  }
var $;
const submitBtn = $('#submitBtn')
console.log(submitBtn)


function setQuery() {
     
        let city = $("#city_name").val();
        let base1 = `${api.base}${city}&appid=${api.key}`
        console.log(base1)
    
}

