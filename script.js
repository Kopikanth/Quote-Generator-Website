const quoteLine = document.querySelector(".quote");
const authorName = document.querySelector(".author");
const newQuote = document.querySelector(".newQuote-button");
const tweet = document.querySelector(".tweet-button");

newQuote.addEventListener("click", showQuote);
tweet.addEventListener("click", tweetQuote);

const apiUrl = "https://dummyjson.com/quotes/random";
const tweetUrl = "https://twitter.com/intent/tweet?text=";

let currentQuote = null;

showQuote();

async function showQuote(){
    const response = await fetch(apiUrl);
    const data = await response.json();


    if (response.status != 404){
        quoteLine.textContent = data.quote;
        authorName.textContent = data.author;
        currentQuote = data;
    }
}

function tweetQuote(){
    const urlText = `${currentQuote.quote} ---- by ${currentQuote.author}`;

    window.open(tweetUrl + urlText, "Tweet Window", "width=600px height=600px");
}