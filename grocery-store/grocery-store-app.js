let storeNameTB = document.getElementById("storeNameTB")
let storeAddressTB = document.getElementById("storeAddressTB")
let storeCityTB= document.getElementById("storeCityTB")
let storeStateTB = document.getElementById("storeStateTB")
let storeZipTB = document.getElementById("storeZipTB")
let submitButton = document.getElementById("submitButton")
let storeList = document.getElementById("storeList")


submitButton.addEventListener("click", () => {
    let name = storeNameTB.value
    let address = storeAddressTB.value
    let city = storeCityTB.value
    let state = storeStateTB.value
    let zip = storeZipTB.value

    saveStoreToFirebase(name, address, city, state, zip)
})

function saveStoreToFirebase(name, address, city, state, zip) {
    db.collection("stores").add({
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip,
        items: []
    })
    .then(function(docRef) {
        listAllStores()
    })
    .catch(function(error) {
        console.log("error loading the store")
    })

}

function listAllStores() {
    storeList.innerHTML = ""

    db.collection("stores").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            let store = doc.data()
            let storeDetails = 
                `<li> 
                    <div>${store.name} - ${store.city}, ${store.state}<div>
                    <div>${store.items}</div>
                    <input type="text" id="addItemTB${doc.id}" placeholder="Enter Item">
                    <button onclick="addItem('${doc.id}')">Add Item</button>
                    <button onclick="deleteStore('${doc.id}')">Delete Store</button>               
                </li>`
            storeList.insertAdjacentHTML("beforeend", storeDetails)
        })  
    })
}

listAllStores()



function deleteStore(id) {
    db.collection("stores").doc(id).delete().then(function() {
        listAllStores()
    }).catch(function(error) {
        console.log("error")
    })
}

function addItem(id) {
    let addItemTB = document.getElementById('addItemTB'+id)
    let newItem = addItemTB.value
    console.log(addItemTB.value)

    console.log(newItem)
    
    var storeRef = db.collection("stores").doc(id)
    
    storeRef.update({
    items: firebase.firestore.FieldValue.arrayUnion(newItem)
    })
    listAllStores()
}