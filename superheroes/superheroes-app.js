let moviesDiv = document.getElementById("moviesDiv")
let movieInfo = document.getElementById("movieInfo")


// get initial request for all batman movies
let request = new XMLHttpRequest()

request.addEventListener("load", function() {
    
    let results = JSON.parse(this.responseText)

    movieItem = results.Search.map((movie) => { 
        return `<div onclick="showMovieInfo('${movie.imdbID}')" class ="listing">
            <div><img src="${movie.Poster}"></div>
            <div>${movie.Title}</div>
        </div>`
    })
    moviesDiv.insertAdjacentHTML("beforeend", movieItem.join(" "))
    
})

request.open("Get", "http://www.omdbapi.com/?s=batman&apikey=ea631a09")
request.send()


//function to show addtional details for the selected movie
function showMovieInfo(imdb) {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      })

    let url = "http://www.omdbapi.com/?i=" + imdb + "&apikey=ea631a09"
    let request = new XMLHttpRequest()
    
    request.addEventListener("load", function() {
        let details = JSON.parse(this.responseText) 
        infoDiv.innerHTML =
            `<div class="featured">
                <div><img src="${details.Poster}"></div>
                <div>Title: ${details.Title}</div> 
                <div>Year: ${details.Year}</div>  
               <div>Rating: ${details.Rated}</div>
               <div>Relase Date: ${details.Released}</div>
                <div>Director: ${details.Director}</div>         
            </div>`
        })
    
    request.open("get", url)
    request.send()

}


