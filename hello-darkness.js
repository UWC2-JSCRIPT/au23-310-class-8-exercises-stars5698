// Donna Quach, JavaScript 310B, Autumn 2023
// Class 8 Exercises

// Every half second (i.e. 500 ms), darken the body backgroundColor by 1
// Stop (clear interval) when you get to zero
// Notes: starting <body> background-color: "rgb(255, 255, 255);"
// After 0.5 second, background-color should be "rgb(254, 254, 254);"

 
let thergb = 255; 

 

let countdowntodarkenbackground = setInterval(function() 
{
    if(thergb > 0) // 0 because the rgb code for the color black is rgb(0, 0, 0)
    {
        thergb--;
        // Start to make the background darker 
        document.body.style.backgroundColor = `rgb(${thergb}, ${thergb}, ${thergb})`;
        // console.log(`$rgb is now ${thergb}`);
    }
    else
    {
        clearInterval(countdowntodarkenbackground); // Stop when background is darkened
    }
}, 500);
