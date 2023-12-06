// Donna Quach, JavaScript 310B, Autumn 2023
// Class 8 Exercises 


// Get a DOM hook into the notice div via its ID
// Remove the notice (div with ID of maintenance-notice) after 5 seconds 

const theNotice = document.getElementById('maintenance-notice');

const removeNotice = function() {
    theNotice.remove(); // Remove completely from the DOM! 
}

setTimeout(removeNotice, 5000);