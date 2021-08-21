let textBox = document.querySelector("#text");
let authorBox = document.querySelector("#author");

let generateBtn = document.querySelector("#generate");

let imageArray = ["Images/cat01.jpg","Images/cat02.jpg","Image/cat03.jpg","Images/cat04.jpg","Images/cat05.jpg","Images/cat06.jpg","Images/cat07.jpg","Images/cat08.jpg","Images/cat09.jpg","Images/cat10.jpg"]

function setRandomImage() {
    document.body.style.backgroundImage = `url(${imageArray[randonNumber(0,imageArray.length)]})`;
    document.body.style.backgroundSize = "cover";
}

//This function will get some catdata from and api and show a random piece of data with the help of our randomnumber()function
function randonNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//This function will get some catfact fro an api and show a random piece of data wiht the help of our random number function
function getFact () {
    fetch("https://codexpression.github.io/catz/catz.json").then((response) => {
        return response.json();
    }).then(data => {
        let catFact = (data.all[randonNumber(0, data.all.length)]);
        textBox.innerHTML = "FACTS:"+catFact.text;
        authorBox.innerHTML = "AUTHOR:" + `${catFact.user.name.first} ${catFact.user.name.last}`
    }).catch (error => {
        console.log(error);
        console.warn("It seems like you don't have an internet connection or the URL you are trying to fetch from is invalid");
    });
    setRandomImage();
}


window.addEventListener("load", getFact); // Running getfact when the window is loaded
generateBtn.addEventListener("click", getFact); // running getfact() when the generate button is clicked