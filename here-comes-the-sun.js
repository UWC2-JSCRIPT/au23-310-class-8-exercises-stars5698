// Donna Quach, JavaScript 310B, Autumn 2023
// Class 8 Exercises 

// Using requestAnimationFrame, animate the background-color of the body so that it changes from black rgb(0, 0, 0) to white rgb(255, 255, 255). It should increment by 1 every frame. 
// Once the background-color is rgb(255, 255, 255), should NOT call requestAnimationFrame again.
// It should take approximately 4-5 seconds for the background to animate from black to white. 

let rgb = 0; 

const animateBackgroundColor = function() {
    if(rgb < 255) {
        
        rgb++;
        // Start to make the background lighter 
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        // console.log(`rgb is now ${rgb}`);
        requestAnimationFrame(animateBackgroundColor);
    }
}; 
requestAnimationFrame(animateBackgroundColor);