let enterTaskTextBox = document.getElementById("enterTaskTextBox")
let addTaskButton = document.getElementById("addTaskButton")
let pendingTaskDiv = document.getElementById("pendingTaskDiv")
let pendingTaskList = document.getElementById("pendingTaskList")
let completeTaskList = document.getElementById("completeTaskList")

addTaskButton.addEventListener("click", function() {
    // create li
    let li = document.createElement("li")

    // create check box & add to li 
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type","checkbox")
    li.appendChild(checkBox)

    //create label with task name & add to li
    let taskLabel = document.createElement("label")
    taskLabel.innerHTML = enterTaskTextBox.value
    li.appendChild(taskLabel)
    enterTaskTextBox.value = ""
    
    // create remove button & add to li
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    li.appendChild(removeButton)
    li.setAttribute("class","taskItem")
    
    //add li to pending task list ul
    pendingTaskList.appendChild(li)

    //set remove button function
    removeButton.addEventListener("click", function() {
        let parent =this.parentElement.parentElement
        parent.removeChild(this.parentElement)
    })

    //moved to completed items with checkmark is checked
    checkBox.addEventListener("click", function(){
        //move li based on check mark to completed or pending
        if (this.checked) {
            completeTaskList.append(this.parentElement)
        } else {
            pendingTaskList.append(this.parentElement)
        }

})
})