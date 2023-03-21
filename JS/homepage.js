let cities = ["Lahore", "Islamabad","Multan", "Karachi", "Peshawar", "Quetta"]
 
let get = document.getElementById('input').value

// SHow all Cities

function showAllCities(){
    document.getElementById("result").innerHTML=''

    for(let i=0; i<cities.length; i++){
        console.log(cities[i])
        let num= i + 1
        document.getElementById('result').innerHTML +=num +")" +cities[i] +"<br>"
    }

}showAllCities

// Add Your City
function addYourCity(){
    let city= document.getElementById('input').value
    if(!city){
        alert("Please type a city name")
        return
    }else{
        
    cities.push(city)
    document.getElementById('result').innerHTML='<span style="color: green; font-size: 24px;">"' +city+ '"</span> has been successfully added in the list'
    }

} addYourCity












// Clear Button
document.getElementById('ClearResult').onclick=function(){
    document.getElementById("result").innerHTML=''
  }
  