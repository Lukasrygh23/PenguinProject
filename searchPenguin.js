"use strict";

let idField = document.querySelector("#idField");
let searchButton = document.querySelector("#searchButton");

let showData = () => {

}


let getData = () => {
    let penguinId = idField.value;
    let url = "http://localhost:8083/get/" + idField.value;
    console.log(url);
    //Test stuff below.
    let getAllURL = "http://localhost:8083/getAll";

    fetch("http://localhost:8083/get/1").then();

}







//BUTTONS
searchButton.addEventListener('click', getData())