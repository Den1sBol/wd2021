import "../scss/main.scss"
const text1 = document.getElementById("place1");
const text2 = document.getElementById("place2");
const text3 = document.getElementById("place3");
const text4 = document.getElementById("place4");
const text5 = document.getElementById("place5");
const text6 = document.getElementById("place6");
const text7 = document.getElementById("place7");
const text8 = document.getElementById("place8");
const text9 = document.getElementById("place9");

const URL1 ="https://api.openweathermap.org/data/2.5/weather?q=Madrid,es&APPID=c76cfc6c188343ce9a77b5fc2edbce93"
const URL2 = "https://jsonplaceholder.typicode.com/users"
const URL3 = "data.json"

let res1;
fetch(URL1)
  .then(response => res1 = response.json())
  .then(r => 
    {res1 = r;
    //console.log(res1)
    text1.textContent=
    `Temp: ${Math.round(res1.main.temp-273)} deg`;
    text2.textContent=`Feels-like: ${Math.round(res1.main.feels_like-273)} deg`;
    text3.textContent = `Humidity: ${res1.main.humidity}%`;
    })
  .catch(err => console.log(err))


let res2;
  fetch(URL2)
  .then(response => res2 = response.json())
  .then(r => 
    {res2 = r;
      console.log(res2);
      text4.textContent= `Name: ${res2[0].name}`;
      text5.textContent= `Email: ${res2[0].email}`;
      text6.textContent=`Company name: ${res2[0].company.name}`
    })
  .catch(err => console.log(err))


let res3;
  fetch(URL3)
  .then(response => res3 = response.json())
  .then(r => 
    {res3 = r;
    //console.log(res3)
    text7.textContent= `Name: ${res3.person1.name}`;
    text8.textContent= `Age: ${res3.person1.age}`;
    text9.textContent= `Hobbies: ${res3.person1.hobbies}`;
    })
  .catch(err => console.log(err))