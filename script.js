const quoteText=document.querySelector(".quote");
const quoteBtn=document.querySelector("button");
const quoteAuther=document.querySelector(".auther .name");
const soundBtn=document.querySelector(".sound");
const copyBtn=document.querySelector(".copy");
const twitterBtn=document.querySelector(".twitter");
const randomQuote=()=>{
    quoteBtn.classList.add("loading")
    quoteBtn.innerText="Loading Quote ..."
    fetch("https://random-math-quote-api.herokuapp.com/").then(response => response.json())
    .then(data=>{
         quoteText.innerText=data.quote;
         quoteAuther.innerText=data.author;
         quoteBtn.classList.remove("loading")
         quoteBtn.innerText="New Quote";

    })
}
quoteBtn.addEventListener("click",randomQuote);
soundBtn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuther.innerText}`);
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText)
});
twitterBtn.addEventListener("click",()=>{
    
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank")
});

