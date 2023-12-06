// Donna Quach, JavaScript 310B, Autumn 2023
// Class 8 Exercises 

// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

const randomNumberPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomVal = Math.random();
    
    if(randomVal > 0.5) {
      resolve(randomVal); // Will send it to the .then()
    }
    else
    {
      reject(randomVal); // Otherwise, reject that promise. Send to .catch()
    }
  }, 1000)
});


const runPromise = randomNumberPromise.then((value) => 
{
  console.log('Success!', value);
  console.log('Complete');
}).catch((value) => {
  console.log('This has failed!', value);
  console.log('Complete');
}); 