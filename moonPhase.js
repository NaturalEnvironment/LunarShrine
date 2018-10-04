let weatherState = 
{
    currently:'',
    daily: ''
};

const darkSkyUrl = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4d4c0c720d5afd9b690e0c1f06b9e184/27.9505,-82.4571';

getWeather = async function()
{

    // Request data from API and store the data
    try
    {
        const weatherResponse = await fetch(darkSkyUrl);
        weatherState = (await weatherResponse.json());
        updateDarkSkyContent();
    }

    // Throw error if data request fails
    catch (err)
    {
        console.log("Error thrown.");
        console.log(err);
    }
}

// Create function to populate variables with data retrieved by DarkSky API
// and parse moon phase data into more useful information
let updateDarkSkyContent = function()
{
    // Raw output for troubleshooting
    console.log(weatherState);

    //Populate HTML document wtih data from API
    const htmlClouds = document.getElementById('cloudPredict');
    //const htmlMoon = document.getElementById('moonPredict');
    const htmlPhase = document.getElementById('lunarPhase');
    const htmlPercent = document.getElementById('lunarPercent');

    //htmlMoon.innerText = weatherState.daily.data[0].moonPhase;

    // Create variables for calculating moon phase information
    let moonVar = weatherState.daily.data[0].moonPhase;
    let cloudVar = weatherState.currently.cloudCover
    console.log('moon variable');
    console.log(moonVar);

    let moonPhaseState = '';
    let moonPhasePercent;


    // New moon state
    if(moonVar<0.02 || moonVar>0.98)
    {
        moonPhaseState = 'New Moon';
    }

    // Waxing crescent moon state
    else if(0.02<=moonVar && moonVar<0.24)
    {
        moonPhaseState = 'Waxing Crescent Moon';
    }

    // Waxing half moon state
    else if(0.24<=moonVar && moonVar<0.26)
    {
        moonPhaseState = 'Waxing Half Moon';
    }

    // Waxing gibbous moon state
    else if(0.26<=moonVar && moonVar <0.47)
    {
        moonPhaseState = 'Waxing Gibbous Moon';
    }

    // Full moon state
    else if(0.47<=moonVar && moonVar <=0.53)
    {
        moonPhaseState = 'Full Moon';
    }

    //Waning gibbous moon state
    else if(0.53<moonVar && moonVar<0.74)
    {
        moonPhaseState = 'Waning Gibbous Moon';
    }

    //Waning half moon state
    else if(0.74<=moonVar && moonVar<=0.76)
    {
        moonPhaseState = 'Waning Half Moon';
    }

    //Waning crescent moon state
    else if(0.76<moonVar && moonVar<=0.98)
    {
        moonPhaseState = 'Waning Crescent Moon';
    }

    else
    {
        moonPhaseState = 'error';
    }

    


    // Moon illumination percent calculation
    if(moonVar<=0.50)
    {
        moonPhasePercent = Math.trunc(moonVar*200);
    }
    else
    {
        moonPhasePercent = Math.trunc((100-((moonVar-0.5)*200)));
    }

    cloudVar = cloudVar*100

    console.log(cloudVar+'% cloud cover');
    console.log(moonPhaseState);
    console.log(moonPhasePercent + '% illuminated');

    htmlPhase.innerText = moonPhaseState;
    htmlPercent.innerText = moonPhasePercent;
    htmlClouds.innerText = cloudVar;

}

getWeather();