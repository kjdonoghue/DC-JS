let newsUL = document.getElementById("newsUL")
let articles = news.articles

function changeNull(value) {
    if (value == null) {
        var result =  "No value"
        } else {
             var result = value
        }
    return result
}    

let newsStory = articles.map(function(story) {
    author = changeNull(story.author)
    title = changeNull(story.title)
    description = changeNull(story.description)
    url = changeNull(story.url)
    urlToImage = changeNull(story.urlToImage)
    publishedAt = changeNull(story.publishedAt)
       
    return `<li> 
    <b> Author: ${author} </b>
    <p> Title: ${title} </p> 
    <p> Description: ${description} </p>
    <a href="${url}">Link to Article</a>
    <img src="${story.urlToImage}"  style="width:100px;height:100px;">     
    <p> Published At: ${story.publishedAt} </p> 
     </li>`
})

newsUL.insertAdjacentHTML("beforeend", newsStory.join(""))

