//const { default: axios } = require("axios");

//https://api.openweathermap.org/data/2.5/weather?zip={40475},{1}&appid={24c69fd5b68ec801c78a2e8762955fed}



// async function getData(url) {
//     try {
//         const response = await axios.get(url);
//         console.log(response.data.results);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData('https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={24c69fd5b68ec801c78a2e8762955fed}');


// axios.get(url)
//     .then(function (response) {
//         // handle success'
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });

// async function getData() {

// const response= await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40475,us&appid=f2ba01b9d4760333e50d7a7790d49f76');
// console.log(response);
// var city = response.data.name;
// var kTemp = response.data.main.temp;
// var condition = response.data.weather[0].description;
// console.log(condition);
// console.log(city);
// console.log(kTemp);
// return city + condition + kTemp ;
// const data = ['response.data.name', 'response.data.main.temp', 'response.data.weather[0].description'];
// return response
// };

// getData()

// var city = response.data.name;
// console.log(city);

// var condition;
// console.log(condition);

// var kTemp;
// console.log(kTemp);

let state = {
    response: "",
    city: "",
    kTemp: "",
    condition: "",
    }
    
    
    async function getData() {
        const response= await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40475,us&appid=f2ba01b9d4760333e50d7a7790d49f76');
    console.log(response.data)
        updateState(response.data)
        //return response
        };
        getData();
       // getData()
    function updateState(data) {
        state.city = data.name;
        state.kTemp = data.main.temp;
        state.condition = data.weather[0].description;
    }
    // response = getData();
    
    // let response = "";
    // let city = "";
    // console.log(city);
    // let kTemp = "";
    // console.log(kTemp);
    // let condition = "";
    // console.log(condition);
    
    // let city = response.data.name;
    // console.log(city);
    // let kTemp = response.data.main.temp;
    // let condition = response.data.weather[0].description;
    
    
    function math(state)