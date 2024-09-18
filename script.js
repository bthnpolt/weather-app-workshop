const url = 'https://api.openweathermap.org/data/2.5/';
const iconUrl = 'https://openweathermap.org/img/wn/'
const api = '874c001705669c5f1ad5fc986fa0f9cf';
const searchBar = document.getElementById("searchBar");
const btnSearch = document.querySelector(".btn-search");
const alert = document.querySelector(".alert");
const alertContent = document.querySelector(".danger-alert");


const setQuery = () =>{
        if (searchBar.value === "") {
            alert.style.display = "flex";
            alertContent.innerText = "Lütfen alanı boş bırakmayınız..."
           setTimeout(()=>{
            alert.style.display = "none";
           },3000);
        }else{
            getResult(searchBar.value);
            searchBar.value = "";
        }
       
}
const display = (data) =>{
    console.log(data);
    
    let city = document.querySelector(".city");
    city.innerText = `${data.name},${data.sys.country}`

    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(data.main.temp)}°C`

    let desc = document.querySelector(".desc");
    desc.innerHTML = `<img style="width: 50px; height: 50px;" alt="${data.weather[0].description}" class="icon" src="${iconUrl}${data.weather[0].icon}.png">`

    let textDesc = document.querySelector(".text-desc");
    textDesc.innerText = `${data.weather[0].description}`

    let minMaxTemp = document.querySelector(".min-maxTemp");
    minMaxTemp.innerText = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`
    
}
const getResult = async(cityName) =>{
    try {
        let query = `${url}weather?q=${cityName}&lang=tr&units=metric&appid=${api}`;
        const respone =   await fetch(query);
        if (!respone.ok) {
            alert.style.display = "flex";
            alertContent.innerText = `Hata: ${respone.statusText}`
           setTimeout(()=>{
            alert.style.display = "none";
           },3000);
        }
        const data =  await respone.json();
        display(data)
    } catch (e) {
        console.log(e);
        
    }
}
btnSearch.addEventListener("click", setQuery
    
);

document.addEventListener("DOMContentLoaded",()=>{
    
})
