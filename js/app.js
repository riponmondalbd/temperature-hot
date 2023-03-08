const API_KEY = `b64d9a514406517f99fe5417ef42aa40`;

const loadTemprature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemprature(data));
}

const displayTemprature = data => {
    // const temprature = document.getElementById('temprature');
    // // console.log(data.weather[0].description);
    // temprature.innerText = data.main.temp;

    setInnerTextById('temprature', data.main.temp);
    setInnerTextById('condition', data.weather[0].description);
}

const setInnerTextById = (id, text) => {
    // const temprature = document.getElementById(id);
    // temprature.innerText = text;
    document.getElementById(id).innerText = text;
}

document.getElementById('button-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;
    loadTemprature(city);
})
loadTemprature('dhaka');
