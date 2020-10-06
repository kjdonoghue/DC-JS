let emailTextBox = document.getElementById("emailTextBox")
let orderTextBox = document.getElementById("orderTextBox")
let submitButton = document.getElementById("submitButton")
let searchTextBox = document.getElementById("searchTextBox")
let searchButton = document.getElementById("searchButton")
let displayOrdersUL = document.getElementById("displayOrdersUL")

//Add an order
submitButton.addEventListener("click", () => {
    
    let coffee = orderTextBox.value
    let emailAddress = emailTextBox.value
    
    let requestObject = {
        emailAddress: emailAddress,
        coffee: coffee        
    }

    console.log(requestObject)
    console.log(JSON.stringify(requestObject))

    let request = new XMLHttpRequest() 

    request.open('POST', 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/')
    request.setRequestHeader('Content-Type','application/json')

    request.send(JSON.stringify(requestObject))

})

function loadAllOrders() {

    let request = new XMLHttpRequest() 
    
    request.open('GET','https://dc-coffeerun.herokuapp.com/api/coffeeorders')

    request.onload = function() {
        let orders = JSON.parse(this.responseText)
        ordersArray = Object.values(orders)
        coffeeOrders = ordersArray.map((item) => {
                return `<li>
                <p> Coffee Order: ${item.coffee}</p>
                <p> Email: ${item.emailAddress}</p>
                <button onclick="deleteOrder()">Delete</button>
                </li>`
        })
        displayOrdersUL.insertAdjacentHTML("beforeend", coffeeOrders.join(" "))
    }

    request.send() 
}
loadAllOrders()

//get email to search for order
searchButton.addEventListener("click", () => {
    let searchEmail = searchTextBox.value
    // console.log(searchEmail)
    searchForOrder(searchEmail)
    
    })


//locate order    
function searchForOrder(email) {
    let url = "https://dc-coffeerun.herokuapp.com/api/coffeeorders/"+ email +""

    let searchRequest = new XMLHttpRequest() 
    
    searchRequest.open('GET', url)

    searchRequest.onload = function() {
        let orderLookup = JSON.parse(this.responseText)
        searchResults.innerHTML = 
                `<div>
                <p> Coffee Order: ${orderLookup.coffee}</p>
                <p> Email: ${orderLookup.emailAddress}</p>
                <button onclick="deleteOrder()">Delete</button>
                </div>`
            }
            // searchResults.insertAdjacentHTML("beforeend", foundOrder.join(" "))

    searchRequest.send() 
}

function deleteOrder() {
    console.log("delete")
}    