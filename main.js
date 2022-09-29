const mainCon = document.getElementById("wrap");

const header = document.createElement('h1');
header.innerHTML = "Weather Watchers";
mainCon.appendChild(header);

const input = document.createElement("form"); // forms are bad andf old, 
mainCon.appendChild(input);

const zip = document.createElement("input");
zip.setAttribute("type", "text");
zip.setAttribute("placeholder", "Zip Code");
zip.setAttribute("id", "search");
zip.setAttribute("value", "")
input.append(zip);

let btn = document.createElement("button");
btn.setAttribute("type", "click");
btn.setAttribute("value", "Weather?");
input.append(btn)

btn.addEventListener('click', (e) => {
    e.preventDefault();
getData()});


let state = {
// response: "",
city: "",
kTemp: "",
fTemp: "",
cTemp: "",
condition: "",
}
console.log(state);

async function getData() {
    // e.preventDefault();
    const zipFill = input.search.value;
    console.log(zipFill);
    try{
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipFill},us&appid=f2ba01b9d4760333e50d7a7790d49f76`);
        console.log(response.data)
        updateState(response.data)
    } catch {
        alert ('Can you please just give me a real Zip Code?')
    }
    // updateState(response.data)
    };

function updateState(data) {
    state.city = data.name;
    state.kTemp = data.main.temp;
    state.condition = data.weather[0].description;
    // function math() {
    state.fTemp = (state.kTemp-273)*1.8+32;
    state.cTemp = (state.kTemp-273.15);
    console.log(state);
    return state;
};


