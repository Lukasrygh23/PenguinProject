"use strict";

//declare everything first
let idField = document.querySelector("#penguinID");
let deleteButton = document.querySelector("#killPenguin");

let resultField = document.querySelector("#deleteConfirm");


let killPenguin = () => {
    let num = Number(idField.value);
    deleteRequest(num);
};

let deleteRequest = (num) => {
    let url = "http://localhost:8083/delete/" + num;
    console.log(url);

    fetch(url, {
        method: `DELETE`
    })
        .then((response) => {
            if (response.status !== 204) {
                console.error(`status: ${response.status}`);
                return;
            }
            console.log("Creation successful!")
            resultField.innerHTML = "You've deleted the penguin at id " + num + ". You monster.";

        });
};














//BUTTON
deleteButton.addEventListener('click', killPenguin);