const submit = document.getElementById('submit');
const numberJokes = document.getElementById('numberjoke')
submit.addEventListener('submit', sendData);
const API_URL = 'http://api.icndb.com/jokes/random/'

function sendData(e) {
    e.preventDefault();
    let xmr = new XMLHttpRequest();
    let numberOfJokes = numberJokes.value;
    let specificAPI_URL = API_URL + numberOfJokes;

    xmr.open('GET', specificAPI_URL, true);
    xmr.onload = function() {
        displayJokes(JSON.parse(this.response))
    }
    xmr.send();
    
    
}

function displayJokes(jokes) {
    jokes = jokes.value;
    const results = document.querySelector('.results');
    let myJokes = '';
    jokes.forEach(joke => {
        myJokes += `<br><br>${joke.joke}`
        
    })
    results.innerHTML = myJokes
}