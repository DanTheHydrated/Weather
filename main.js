const mainCon = document.getElementById("flex-wrap");
mainCon.setAttribute("class", "container text-center justify-content-center");

const header = document.createElement('h1');
header.innerHTML = "Weather Watchers";
mainCon.appendChild(header);

const input = document.createElement("form"); // forms are gross, old, stupid, and dont work properly but there isnt enough time tim fix it
mainCon.appendChild(input);

//sets the button and the enter text
const zip = document.createElement("input");
zip.setAttribute("type", "text");
zip.setAttribute("placeholder", "Zip Code");
zip.setAttribute("id", "search");
zip.setAttribute("value", " ");
input.append(zip);

let btn = document.createElement("input");
btn.setAttribute("type", "submit");
btn.setAttribute("value", "Weather?");
btn.setAttribute("class", "btn-lg")
input.append(btn);

btn.addEventListener('click', (e) => {
    e.preventDefault(); //this prevents the page from reloading when button is clicked because form sucks 
getData()});

//The State Objects 
let state = {
city: "",
kTemp: "",
fTemp: "",
cTemp: "",
condition: "",
};
console.log(state);

//Asking the eldredge API gods to give me esoteric knowledge from far oof lands
async function getData() {
    const zipFill = input.search.value;
    console.log(zipFill);
    try{
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipFill},us&appid=f2ba01b9d4760333e50d7a7790d49f76`);
        console.log(response.data)
        updateState(response.data)
    } catch {
        alert ('Can you please just give me a real Zip Code?')
    }
    };

//This creates the State Objects
function updateState(data) {
    state.city = data.name;
    state.kTemp = data.main.temp;
    state.condition = data.weather[0].description;
    state.fTemp = Math.round(state.kTemp-273)*1.8+32;
    state.cTemp = Math.round(state.kTemp-273.15);
    if (data.weather[0].main === "Rain") {
        document.body.style.backgroundImage = "url(./images/Graining.gif)";
    } else if (data.weather[0].main == "Misty") {
        document.body.style.backgroundImage = "url(./images/Graining.gif)";
    } else if (data.weather[0].main == "Clear") {
        document.body.style.backgroundImage = "url(./images/clearSkys.gif)";
    } else if (data.weather[0].main == "Clouds") {
        document.body.style.backgroundImage = "url(./images/cloudy.gif)";
    } else {
        document.body.style.backgroundImage = "url(./images/idkBro.gif)";
    };
    console.log(data.weather[0].main)
    console.log(state);
    showWeather();
    return state;
};



//this is the function THE WALL"tm" will run through, I think.
function dynamic (parent, elType, Id , classSet) {
    let element = document.createElement(elType)
    if (classSet) {
        element.setAttribute('class', classSet);
    }
    if (Id) { 
        element.setAttribute('id', Id );
    }
    parent.appendChild(element);
};

//THE WALL"tm" 
//city in question
dynamic(mainCon, 'div', 'cityCard', 'card');
dynamic(cityCard, 'div', 'cityRow1', 'row');
dynamic(cityRow1, 'div', 'cityText', 'col-12');
dynamic(cityRow1, 'div', 'cityRow2', 'row');
dynamic(cityRow2, 'div', 'currentCity', 'col-12');
//temp of city
dynamic(mainCon, 'div', 'tempCard', 'card')
dynamic(tempCard, 'div', 'tempRow1', 'row');
dynamic(tempRow1, 'div', 'tempText', 'col-12');
dynamic(tempRow1, 'div', 'tempRow2', 'row');
dynamic(tempRow2, 'div', 'kelvin', 'col-sm-4 col-12');
dynamic(tempRow2, 'div', 'fahrenheit', 'col-sm-4 col-12');
dynamic(tempRow2, 'div', 'celsius', 'col-sm-4 col-12');
//condition of citys weather
dynamic(mainCon, 'div', 'conCard', 'card');
dynamic(conCard, 'div', 'conRow1', 'row');
dynamic(conRow1, 'div', 'conText', 'col-12');
dynamic(conRow1, 'div', 'conRow2', 'row');
dynamic(conRow2, 'div', 'condition', 'col-12');

function showWeather(fill) {
    document.getElementById('cityText').innerHTML= "City";
    document.getElementById('currentCity').innerHTML= "&nbsp;" + state.city + "&nbsp;";
    document.getElementById('tempText').innerHTML= "City's Temp.";
    document.getElementById('kelvin').innerHTML= "&nbsp;" + state.kTemp + "&nbsp;";
    document.getElementById('fahrenheit').innerHTML= "&nbsp;" + state.fTemp + "&nbsp;";
    document.getElementById('celsius').innerHTML= "&nbsp;" + state.cTemp + "&nbsp;";
    document.getElementById('conText').innerHTML= "City's Weather";
    document.getElementById('condition').innerHTML= "&nbsp;" + state.condition + "&nbsp;";
    // document.getElementById('').innerHTML= ;
    // document.getElementById('').innerHTML= ;
    // document.getElementById('').innerHTML= ;
};

showWeather();
