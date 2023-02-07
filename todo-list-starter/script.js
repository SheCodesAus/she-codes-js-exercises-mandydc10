let todoTasksText = [
    "Buy milk",
    "Eat dinner",
    "Nail javascript",
    "Give feedback",
];

let todoTasksStatus = [true, false, false, true];
let todoTasksPriority = [true, false, false, true];

function createNewTaskElement(task, index) {
    // Create a new <p> element & set the text of the new <p> element
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    // Mark the task as complete if the status is true
    if (todoTasksStatus[index] === true) {
        newTodoTaskTextElement.classList.add("complete");

    }

    if (todoTasksPriority[index] === true) {
        newTodoTaskTextElement.classList.add("priority");
    }

    // Create a new <li> element and append the <p> element to it
    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    let importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "Important";
    importantButtonElement.classList.add("important");
    importantButtonElement.onclick = function () {
        toggleImportant(index);
    };
    newTodoTaskElement.appendChild(importantButtonElement);

    // Create a new <button> element and append it to the <li> element
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Complete";
    completeButtonElement.classList.add("complete");
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);


    return newTodoTaskElement;
}
    
function addTask() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }
}

function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    // Loop through the todoTasksText array
    todoTasksText.forEach((task, index) => {
    let newTodoTaskElement = createNewTaskElement(task, index);

      // Append the <li> element to the <ul> element
    todoList.appendChild(newTodoTaskElement);
    });
}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {
    console.log("Before", todoTasksStatus[index]);
    if (todoTasksStatus[index] === false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    console.log("After", todoTasksStatus[index]); updateTodoList();
}

function toggleImportant(index) {
    let importantButton = document.querySelectorAll("#important")
    if (todoTasksPriority[index] === false) {
        todoTasksPriority[index] = true;
        importantButton.classList.add("on");
    } else {
        todoTasksPriority[index] = false;
        importantButton.classList.remove("on");
    }
    updateTodoList();
}
    
updateTodoList();


// let todoTasksText = [
//     "Walk Chilli",
//     "Make Dinner",
//     "Learn Javascript"
// ];

// let todoTasksStatus = [false, true, true];
//Grab the UL element
// let todoList = document.getElementById("todo-list");

// function createNewTaskElement(task, index) {
    //Create a new <li> element
    // let newTodoTaskTextElement = document.createElement("p");
    // Set the text of the new <p> element
    // newTodoTaskTextElement.innerText = task;

    //Using the todo list index with the foreach loop, find the equivalent index status in below array to determine if class of 'complete' is added
    // if (todoTasksStatus[index] === true) {
    //     newTodoTaskTextElement.classList.add("complete");
    // }

    //Create a new <li> element and append the <p> element to it
    // let newToDoTaskElement = document.createElement("li");
    // newToDoTaskElement.appendChild(newTodoTaskTextElement);

    // return newToDoTaskElement;
    //Append the <li> element to the <ul> element

    //Create a <button> element and append it to the <li> element
//     let completeButtonElement = document.createElement("input");
//     completeButtonElement.type = "button";
//     completeButtonElement.value = "Complete";
//     completeButtonElement.onclick = function () {
//         toggleComplete(index);
//     }
//     newToDoTaskElement.appendChild(completeButtonElement);
// }

// function addTask() { }

// function updateTodoList() {
//     let todoList = document.getElementById("todo-list");
//     todoList.innerHTML = "";

    //Loop through the todoTasks Text array
    // todoTasksText.forEach((task, index) => {
    //     let newTodoTaskElement = createNewTaskElement(task, index);
        //Append the <li> element to the <ul> element
//         todoList.appendChild(newTodoTaskElement);
//     })
// }

// function createNewTodoItemElement(todoItem, index) { }

// function toggleComplete(index) {
//     if (todoTasksStatus[index] == false) {
//         todoTasksStatus[index] = true;
//     } else {
//         todoTasksStatus[index] = false;
//     }
//     updateTodoList();
// }

// updateTodoList();