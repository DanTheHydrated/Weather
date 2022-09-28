const container = document.getElementById("wrap");

let btn = document.createElement("input");
btn.setAttribute("type", "submit");
btn.setAttribute("value", "Get Weather");





let state = {
// response: "",
city: "",
kTemp: "",
fTemp: "",
cTemp: "",
condition: ""
}
console.log(state);

async function getData() {
    const response= await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40475,us&appid=f2ba01b9d4760333e50d7a7790d49f76');
console.log(response.data)
    updateState(response.data)
    };
    getData();

function updateState(data) {
    state.city = data.name;
    state.kTemp = data.main.temp;
    state.condition = data.weather[0].description;
    // function math() {
        state.fTemp = (state.kTemp-273)*1.8+32;
        state.cTemp = (state.kTemp-273.15);
    // }
};


// function math(state) {
//     fTemp = (state.kTemp-273)*1.8+32;
//     console.log(fTemp);
// }

