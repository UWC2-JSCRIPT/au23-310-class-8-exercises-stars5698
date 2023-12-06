// Donna Quach, JavaScript 310B, Autumn 2023
// Class 8 Exercises 

// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';


const subject = 'cars';

const url = `${BASE_URL}?q=${subject}&api-key=${API_KEY}`;



const asyncFetch = async function() {
  try {
    const data = await fetch(url);

    const dataJson = data.json();

    console.log('Async / Await func', data);

    console.log('Async / Await func', dataJson);
  }
  catch(err) {
    console.log(err);
  }
}

fetch(url)
  .then(function(response) {
    console.log('First Response', response);
    return response.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    
      // Display the snippet of the article
      const snippetElement = document.getElementById('article-snippet');
      snippetElement.innerText = article.snippet; 

      // Add href attribute to <a> for article link 
      const articleLinkElement = document.getElementById('article-link');
      // No need to put "https://www.nytimes.com/" in front of article.web_url because it already has it
      const articleURL = `${article.web_url}`; 
      articleLinkElement.setAttribute('href', articleURL);

      // Display authors of article 
      const articleAuthorElement = document.getElementById('article-author');
      articleAuthorElement.innerText = article.byline.original; 
    }
  });
