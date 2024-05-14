// api url
const api_url = "https://api.quotable.io/random";

const quote= document.getElementById('quote');
const author= document.getElementById('author');

// function to get the quote from API
async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

// on button click run the function
document.getElementById('newQuote').addEventListener('click', () => {
    getQuote(api_url);
}); 

// tweet function
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- By " + 
    author.innerHTML, "Tweet Window", "width=600, height=300");
}

// on button click run the function - tweet
document.getElementById('twitter').addEventListener('click', () => {
    tweet();
});

//  on page load run the function
document.addEventListener('DOMContentLoaded', function() {
    getQuote(api_url);
});