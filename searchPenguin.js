"use strict";

let idField = document.querySelector("#idField");
let searchButton = document.querySelector("#searchButton");

let postData = () => {
    let num = Number(idField.value);
    let postData = getData(num);
    console.log(postData);
};

let getData = (num) => {

    let url = "http://localhost:8083/get/" + num;
    console.log(url);
    //Test stuff below.
    let getAllURL = "http://localhost:8083/getAll";


    fetch(url)
        .then((response) => {
            if (response.status !== 202) {
                console.error(`status: ${response.status} `);
                return;
            }
            response.json()
                .then((data) => {
                    console.log(data);
                    //console.log(data[0]);
                    //console.log(data[0].body);
                    return data;
                }

                )
        }).catch((error) => {
            console.error(`${error}`)
        });

};







//BUTTONS
searchButton.addEventListener('click', postData);