let addButton = document.getElementById("add-one");
let subtractButton = document.getElementById("subtract-one");
// let number = document.getElementById("number").innerText;


function addOne() {
    let total = parseInt(number);
    number.innerText = "";
    console.log(total);
    total = total + 1;
    console.log(total);
    number.innerText = total;
    console.log(number);
}

function subtractOne() {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - 1;
    numberElement.innerText = number;
    console.log(number);
}

console.log(number.innerText);


// let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     number = parseInt(number) + step;
//     numberElement.innerText = number;