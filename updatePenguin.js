"use strict";

//Declare Fields
let iDField = document.querySelector("#penguinID");
let nameField = document.querySelector("#penguinName");
let ageField = document.querySelector("#penguinAge");
let danceField = document.querySelector("#happyFeetList");
let updateButton = document.querySelector("#updatePenguin");
let resultField = document.querySelector("#result");

//Functions!

let updatePenguin = () => {
    let PID = iDField.value;
    let PName = nameField.value;
    let PAge = ageField.value;
    let HapFeet = danceField.value;

    let newPenguin = {
        name: PName,
        age: PAge,
        happyFeet: HapFeet
    };

    console.log(newPenguin);
    updatePenguinRequest(PID, newPenguin);
};

let updatePenguinRequest = (id, penguin) => {
    let url = "http://localhost:8083/update/" + id;
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/JSON",
        },
        body: JSON.stringify(penguin),
    }).then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }
        console.log("Update successful!");
        resultField.innerHTML = "You have updated this penguin! Congratulations.";

    });

};

//Event listeners.
updateButton.addEventListener('click', updatePenguin);