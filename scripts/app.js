let button = document.getElementById('btnUsers');

button.addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts/101')
    .then(function (response){
        if (response.ok) {
            return response.json();
        } else {
            console.log("Erro");
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
});