// Donna Quach, JavaScript 310B, Autumn 2023
// Class 8 Exercises 

const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
// const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;


let userDateFull = '';
const userList = 'hardcover-fiction'; // Because assignment specifies to use this 
let bookURL = '';

const asyncFetch = async function() {
  try {
    const data = await fetch(bookURL);

    const dataJson = data.json();

    console.log('Async / Await func', data);

    console.log('Async / Await func', dataJson);
  }
  catch(err) {
    console.log(err);
  }
}; 


formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  userDateFull = `${year}-${month}-${date}`;
  
  bookURL = `https://api.nytimes.com/svc/books/v3/lists/${userDateFull}/${userList}.json?api-key=${API_KEY}`;

  // Fetch bestselling books for date and add top 5 to page
  fetch(bookURL)
    .then(function(response) {
      console.log('First Response', response);
      return response.json();
    })
    .then(function(responseJson) {
      // responseJson will return list of bestsellers within an object 
      console.log(responseJson); 
  
      // Returns #1 best selling book 
      let bestseller = responseJson.results.books[0];
      console.log(bestseller);
  
      // List of bestsellers
      let bestsellers = responseJson.results.books; 

      // If there are best selling books  
      if(bestsellers.length > 0) {
        // Display the title, author, and description of the Top 5 Bestselling Books
        const displayBooksPage = document.getElementById('books-container');
        let displayBookPageText = ''; 
        let displayBooksPageText = '';

        // To access a book --> results.books[i].attributeofinterest
        // Book title = responseJson.results.books[i].title
        // Book author = responseJson.results.books[i].author
        // Book description = responseJson.results.books[i].description 
        // Book image = responseJson.results.books[i].book_image
        for(i = 0; i < 5; i++) {
           // Set text that contains book information 
           // Newline for each subsequent book! 
           let bookTitle = bestsellers[i].title;
           let bookAuthor = bestsellers[i].author; 
           let bookDescription = bestsellers[i].description;

           // Text for one book 
           displayBookPageText = `Title: ${bookTitle}<br>Author: ${bookAuthor}      <br>Description: ${bookDescription}<br>`;


           // Text for multiple books 
           displayBooksPageText += displayBookPageText + '\n';

        }

        // After Top 5 Bestselling Books have been obtained, list them on page!
        displayBooksPage.innerHTML = displayBooksPageText + '<br>';
      }
    });
});
