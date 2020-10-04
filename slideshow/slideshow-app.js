let slideshowDiv = document.getElementById("slideshowDiv")
let imageArray = ["poster1.png", "poster2.png", "poster3.png", "poster4.png", "poster5.png"]
var index = 0

setInterval (() => {
        slideshowDiv.innerHTML = `<image src=${imageArray[index++]}></img>`
        if (index > imageArray.length-1) {
            index = 0
        } 
}, 1000)

