let backgroundGenerator = function()
{
    // Generate random number between one and the number of backgrounds.
    // The number of backgrounds needs to be manually set by the programmer.
    let paperNumber = Math.floor(Math.random() * 4);
    const htmlPaper = document.querySelector("#paperImage>img"); 


    // Assign randomly selected walpaper to HTML document.
    if(paperNumber == 0)
        htmlPaper.src = "https://i.imgur.com/HaXfuWI.jpg";
    else if(paperNumber == 1)
        htmlPaper.src = "https://i.imgur.com/DZfaU8M.jpg";
    else if(paperNumber == 2)
        htmlPaper.src = "https://i.imgur.com/ub3Ldmb.jpg";
    else if(paperNumber == 3)
        htmlPaper.src = "https://i.imgur.com/FOxBUG0.jpg";
    else if(paperNumber == 4)
        htmlPaper.src = "https://i.imgur.com/SrmufHM.jpg";
    else
        htmlPaper.src = "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png";
}

backgroundGenerator();
