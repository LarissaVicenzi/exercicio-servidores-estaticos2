let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts/101')
    .then(function (response){
        if (response.ok) {
            return response.json();
        } else {
            let errorMessage = "Recurso não encontrado ou servidor não disponível"
            throw new Error (errorMessage);
        }
    })
    .then(function (json) {
        // let post = new Post (1,1,"","");
        let post = Post.fromRaw(json);
        div = post.renderFrom(div);

        // console.log(post);
        
        // div.innerText = json.body;
        // div.innerText = JSON.stringify(json, null, 0);  
    })
    .catch(function (error) {
        renderError(error);
        // console.log(error);
    })
});

function renderError(error) {
        div.innerHTML = "";

       let h2 = document.createElement(`h2`);
        h2.textContent = error;

        div.appendChild(h2);
    }