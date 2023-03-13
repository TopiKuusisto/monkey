const API_KEY = '3d9bc669ff9fa616b92065dfe7eb62ba';
//default place
let city = 'tampere';

const tempElement1 = document.getElementById("temp1");
const tempElement2 = document.getElementById("temp2");
const tempElement3 = document.getElementById("temp3");

const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");

let weatherChart;

//function to change the place
document.getElementById("submit").onclick = () => {
    //city variable gets changed to user input
    city = document.getElementById("input").value;
    
    //Element on the page that shows the place gets updated
    document.getElementById("cityElement").innerText = city.toUpperCase();

    //old chart gets destroyed so a new one can be drawn
    weatherChart.destroy();

    //fetch new data
    fetchWeatherData();

}


//function that changes all the weather icons
const setIcons = (icon, weather, description) => {

   
    if(weather == "Clear")
    {
        icon.src = './images/SunnyIcon.png';
    }

    else if(weather == "Thunderstorm")
    {
        icon.src = './images/thunderIcon.png';
    }

    else if(weather == "Drizzle")
    {
        icon.src = './images/RainIcon.png';
    }

    else if(weather == "Rain")
    {
        icon.src = './images/RainIcon.png';
    }

    else if(weather == "Snow")
    {
        icon.src = './images/SnowIcon.png';
    }

    else if(weather == "Clouds" && description == "few clouds")
    {
        icon.src = './images/halfCloudIcon.png';
    }

    else if(weather == "Clouds" && description == "scattered clouds")
    {
        icon.src = './images/halfCloudIcon.png';
    }

    else if(weather == "Clouds" && description == "broken clouds")
    {
        icon.src = './images/halfCloudIcon.png';
    }

    else if(weather == "Clouds" && description == "overcast clouds")
    {
        icon.src = './images/cloudIcon.png';
    }

    else
    {
        icon.src = './images/foggyIcon.png';
    } 
};

//function that draws the chart
const showChart = (today, tempNow, dates1500, temps1500, timeNow) => {
    

    dates1500.unshift(today);
    temps1500.unshift(tempNow);

    let min;
    let max;

   if(timeNow === "00:00:00" || timeNow === "03:00:00" ||timeNow === "06:00:00" || timeNow === "09:00:00" || timeNow === "12:00:00" || timeNow === "15:00:00")
    {

    dates1500.shift();
    temps1500.shift();

    min = Math.min(...temps1500);
    max = Math.max(...temps1500);
    
    

    const context = document.getElementById("canvas").getContext('2d');
    weatherChart = new Chart(context, {
        type: "line",
        data:{
            labels: dates1500,
            datasets: [{
                label: "Temperature (Celcius)",
                data: temps1500,
                backgroundColor: 'rgba (255, 99, 132, 0.2)',
                borderColor: 'rgba (255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options:{
            plugins: {
                legend: {
                    labels: {
                        
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales:{
                y: {
                    beginAtZero: false,
                    min: Math.round(min)-3,
                    max:  Math.round(max)+3
                }
            }
        }
    });

    }

    else 
    {
         
    min = Math.min(...temps1500);
    max = Math.max(...temps1500);
    

        const context = document.getElementById("canvas").getContext('2d');
        const weatherChart = new Chart(context, {
        type: "line",
        data:{
            labels: dates1500,
            datasets: [{
                label: "Temperature (Celcius)",
                data: temps1500,
                backgroundColor: 'rgba (255, 99, 132, 0.2)',
                borderColor: 'rgba (255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options:{
            plugins: {
                legend: {
                    labels: {
                        
                        font: {
                            size: 14
                        }
                    }
                }
            },
            
            scales:{
                y: {
                    beginAtZero: false,
                    min: Math.round(min)-3,
                    max: Math.round(max)+3
                }
            }
        }
    });
    }
    
}



const setTemps = (data) => {

    const weatherList = data.list.map(item => item.weather[0].main);
    const descriptionList = data.list.map(item => item.weather[0].description);

    const temps = data.list.map(item => item.main.temp);
    const datesAndTimes = data.list.map(item => item.dt_txt)
    const times = datesAndTimes.map(item => item.substr(11));
    const dates = datesAndTimes.map(item => item.substr(0, 10));
    

    const temps1500withXs = data.list.map(item => {
        if (item.dt_txt.includes("15:00:00"))
        {
            return item.main.temp;
        }
        else
            return "x";
    });

    const weathers1500withXs = data.list.map(item => {
        if (item.dt_txt.includes("15:00:00"))
        {
            return item.weather[0].main;
        }
        else
            return 0;
    });

    const descriptions1500withXs = data.list.map(item => {
        if (item.dt_txt.includes("15:00:00"))
        {
            return item.weather[0].description;
        }
        else
            return 0;
    });

    const dates1500withXs = data.list.map(item => {
        if (item.dt_txt.includes("15:00:00"))
        {
            return item.dt_txt;
        }
        else
            return 0;
    });

    const temps1500 = temps1500withXs.filter(item => typeof item === typeof(1));
    const weathers1500 = weathers1500withXs.filter(item => typeof item === typeof("auto"));
    const descriptions1500 = descriptions1500withXs.filter(item => typeof item === typeof("auto"));
    const datesAndTimes1500 = dates1500withXs.filter(item => typeof item === typeof("auto"));
    
    const dates1500 = datesAndTimes1500.map(item => item.substr(0, 10));

    

    const timeNow = times[0];

    const temp = temps[0];

    tempElement1.innerHTML = Math.round(temp) + "°C";
    setIcons(icon1, weatherList[0], descriptionList[0]);

    if(timeNow === "00:00:00" || timeNow === "03:00:00" ||timeNow === "06:00:00" || timeNow === "09:00:00" || timeNow === "12:00:00" || timeNow === "15:00:00")
    {
        tempElement2.innerHTML = Math.round(temps1500[1]) + "°C";
        tempElement3.innerHTML = Math.round(temps1500[2]) + "°C";
        setIcons(icon2, weathers1500[1], descriptions1500[1]);
        setIcons(icon3, weathers1500[2], descriptions1500[2]);
    }

    else {
        tempElement2.innerHTML = Math.round(temps1500[0]) + "°C";
        tempElement3.innerHTML = Math.round(temps1500[1]) + "°C";
        setIcons(icon2, weathers1500[0], descriptions1500[0]);
        setIcons(icon3, weathers1500[1], descriptions1500[1]);
    }

   showChart(dates[0], temp, dates1500, temps1500, timeNow);
};

const fetchWeatherData = async() => {
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    setTemps(data);
    }
    catch (error){
    console.log(error)
    }
};

fetchWeatherData();