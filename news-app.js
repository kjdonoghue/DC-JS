let newsUL = document.getElementById("newsUL")
let articles = news.articles

function changeNull(value) {
    if (value == null) {
        var result =  "None"
        } else {
            var result = value
        }
    return result
}    

let newsStory = articles.map((story) => {
    let author = changeNull(story.author)
    let title = changeNull(story.title)
    let description = changeNull(story.description)
    let url = changeNull(story.url)
    let urlToImage = changeNull(story.urlToImage)
    let publishedAt = changeNull(story.publishedAt)
       
    return `<li> 
        <b> Author: ${author} </b>
        <p> Title: ${title} </p> 
        <p> Description: ${description} </p>
        <a href="${url}">Link to Article</a>
        <img src="${urlToImage}"  style="width:100px;height:100px;">    
        <p> Published At: ${publishedAt} </p> 
        </li>`
})

newsUL.insertAdjacentHTML("beforeend", newsStory.join(""))

