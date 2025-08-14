// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

const button = document.querySelector("#listar")
button.addEventListener("click", createPost)

window.onload = listPost()

function listPost(){
    let postDiv = document.querySelector("#postList")
    postDiv.innerHTML = " "
    for (let item in posts){
        console.log(posts[item].text)
        let cardPost = document.createElement("div")
        cardPost.innerHTML = `
        <h1>${posts[item].text}</h1>
        <img src = "${posts[item].image}">
        <p>${posts[item].category}</p>
        <p>${posts[item].date}</p>
        `

        postDiv.appendChild(cardPost)
    
    }
}

function createPost(){
    let post = {
        text: "",
        image: "",
        category: "", 
        date: ""
    }


    post.text = document.querySelector("#postText").value
    post.image = document.querySelector("#postImage").value
    post.category = document.querySelector("#postCategory").value
    const atualdate = new Date().toLocaleString()
    post.date = atualdate
    

    posts.push(post)
    listPost()
}



