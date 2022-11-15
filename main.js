// English Quote function
function englishQuote(){
  url = "https://api.quotable.io/random"
  fetch(url).then((response)=>{
    return response.json()
  }).then((data)=>{
    document.querySelector(".Quote").innerHTML = data.content;
  });
}
