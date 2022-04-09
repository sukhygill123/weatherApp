const submitBtn = document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const city_name=document.getElementById('city_name')
const temp =document.getElementById('temp');
const temp_status =document.getElementById('temp_status')

const getInfo=async(event)=>{
    event.preventDefault();
        // alert('helo')
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText='Add your input first'
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=aa4af6be1e02b9b3930564aea0d8f78b`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data]
            city_name.innerHTML=`${arrData[0].name}, ${arrData[0].sys.country}, humidity ${arrData[0].main.humidity}`
            temp.innerText=arrData[0].main.temp
            temp_status.innerHTML=arrData[0].weather[0].main
        }
        catch{
            city_name.innerText='Add your input first'
        }
        
}}
submitBtn.addEventListener('click', getInfo);