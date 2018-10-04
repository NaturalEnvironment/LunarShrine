// Create the object which contains retreived NASA Astronomy Picture of the Day data
let apodState = 
{
   // date: '',
    explanation: '',
    title: '',
    url: ''

};

const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=j7HCFYjhFcTEfZBkR2KutHwx2yW4UAK6p4Qi4L6z';


getAPOD = async function()
{

    // Request data from API and store the data
    try
    {
        const apodResponse = await fetch(apodUrl);
        apodState = (await apodResponse.json());
        updateAPOD();
    }

    // Throw error if data request fails
    catch (err)
    {
        console.log("Error thrown.");
        console.log(err);
    }
}

let updateAPOD = function()
{
    // Raw output for troubleshooting
    console.log(apodState);

    // Populate HTML document wtih data from API
   // const apodDate = document.getElementById('date');
    const apodText = document.getElementById('APOD-explanation');
    const apodTitle = document.getElementById('APOD-title');
    const apodImage = document.querySelector("#APOD-image>img"); 
    apodImage.src = apodState.url;
    apodTitle.innerText = apodState.title;
    //apodDate.innerText = apodState.date;
    apodText.innerText = apodState.explanation;
}

getAPOD();