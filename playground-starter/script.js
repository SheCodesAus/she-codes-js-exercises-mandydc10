
function showName() {
    let name = document.getElementById("name-text").value;
    alert(`Hi, ${name}`);
}

for (let count = 0; count < 10; count++) {
    console.log(count);
}

let pets = ["Chilli", "Rex", "Roary", "Fleur"];
console.log(pets);
pets.push("Ivy");
console.log(pets);
console.log(pets[0]);
console.log(pets[3]);

for (let index = 0; index < pets.length; index++) {
    console.log(pets[index]);
}

pets.forEach((pet) => { console.log(pet); });

pet = "Ivy";

if (pet === "Chilli") {
    console.log("OMG you are the cutesst!");
} else if (pet === "Ivy") {
    console.log("Naaaww cute bow.");
} else {
    console.log("OMG so cute.");
}