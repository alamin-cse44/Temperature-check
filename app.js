const loadData = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=0ae01d2706f2529d10efc28689210a36`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
    .catch(err => alert("Wrong city Name"));
    // console.log(data.weather[0].main) ---> clouds
}

const displayTemparature = data =>{
    // console.log(data);
    const containerDiv = document.getElementById('display');
    containerDiv.textContent = "";
    let temp = data.main.temp;
    temp -= 266;
    console.log(temp);
    containerDiv.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h1>${data.name}</h1>
        <h3><span>${(data.main.temp-273.15).toFixed(2)}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].description}</h1>
    `;
    
}