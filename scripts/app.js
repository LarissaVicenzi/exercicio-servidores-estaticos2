let button = document.getElementById('btnUsers');

button.addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts77')
    .then(function (response){
        return response.json();
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