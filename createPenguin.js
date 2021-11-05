"use strict";

//Declare fields
let nameField = document.querySelector("#penguinName");
let ageField = document.querySelector("#penguinAge");
let happyFeet = document.querySelector("#happyFeetList");
let createButton = document.querySelector("#createPenguin");
let resultField = document.querySelector("#result");

//Declare methods.
let createPenguin = () => {

    let Pname = nameField.value;
    let Page = ageField.value;
    let Pdance = happyFeet.value;

    let newPenguin = {
        name: Pname,
        age: Page,
        happyFeet: Pdance
    };
    console.log(newPenguin);
    createPenguinRequest(newPenguin)
};

let createPenguinRequest = (penguin) => {

    fetch("http://localhost:8083/createPenguin", {
        method: "POST", //We're adding in data.
        headers: {
            "Content-type": "application/JSON",
        },
        body: JSON.stringify(penguin),
    }).then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }
        console.log("Creation successful!")
        resultField.innerHTML = "You have created a new penguin! Congratulations. His name is " + penguin.name + ".";

    });

};


//Add event listeners.
createButton.addEventListener('click', createPenguin);