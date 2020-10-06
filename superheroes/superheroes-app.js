let moviesDiv = document.getElementById("moviesDiv")
let movieInfo = document.getElementById("movieInfo")

function getAllMovies(completion) {

    let moviesURL = "http://www.omdbapi.com/?s=batman&apikey=ea631a09"
    let request = new XMLHttpRequest()

    request.addEventListener("load", function() {
        
        let movies = JSON.parse(this.responseText)
        completion(movies)
        return movies
        
    })
    request.open("GET", "http://www.omdbapi.com/?s=batman&apikey=ea631a09")
    request.send()
}

function displayMovies(movies) {
    let movieItem = movies.Search.map((movies) => { 
            return `<div onclick="showMovieInfo('${movies.imdbID}')" class ="listing">
                <div><img src="${movies.Poster}"></div>
                <div>${movies.Title}</div>
            </div>`
    })
        moviesDiv.insertAdjacentHTML("beforeend", movieItem.join(" "))

}

getAllMovies((movies) => {
    displayMovies(movies)
})

//function to show addtional details for the selected movie
function showMovieInfo(imdb) {
   
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
    
    request.open("GET", url)
    request.send()
    
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      })
}
