let button = document.getElementById('btnUsers');

button.addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response){
        return response.json();
    })
    .then(function (json) {
        div.innerText = json.body;
        // div.innerText = JSON.stringify(json, null, 0);
        
    })
});