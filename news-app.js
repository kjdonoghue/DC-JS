let newsUL = document.getElementById("newsUL")
let articles = news.articles

let newsStory = articles.map(function(story) {
    if (story.author == null) {
        var author =  "No Author"
    } else {
        var author = story.author
    }

    if (story.title == null) {
        var title =  "No Title"
    } else {
        var title = story.title
    }

    if (story.description == null) {
        var description =  "No Description"
    } else {
        var description = story.description
    }

    if (story.url == null) {
        var url =  "No URL"
    } else {
        var url = story.url
    }

    if (story.urlToImage == null) {
        var urlToImage =  "No Image"
    } else {
        var urlToImage = story.url
    }

    if (story.publishedAt == null) {
        var publishedAte =  "No Image"
    } else {
        var publishedAt = story.publishedAt
    }
        
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

