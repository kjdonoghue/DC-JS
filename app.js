let menuList = document.getElementById("menuList")

let starters = dishes.filter(function(items){
    return items.course == "Starters"
    })

let entrees = dishes.filter(function(items){
        return items.course == "Entrees"
        })

let desserts = dishes.filter(function(items){
    return items.course == "Desserts"
    })
        
function displayMenu(list){
    menuList.innerHTML = ""
    let menuItem = list.map(function(item) {
    return `<li class="menuItem">
        <div><img src=${item.imageURL}></img></div>
        <div><b> ${item.title} </b></div>
        <div><label> ${item.description} </label></div>
        <div><label> ${item.price}</label></div>
        `
        })
    
     menuList.insertAdjacentHTML("beforeend", menuItem.join(" "))
    
    }
