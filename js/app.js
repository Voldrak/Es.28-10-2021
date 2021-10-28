//Dark Mode
const darkMode = document.querySelector("#enableDarkMode");
darkMode.addEventListener("click", () => 
{ document.body.classList.toggle("nightMode");});

//Illuminazione Hobby
const lighMode = document.querySelector("#luce");
lighMode.addEventListener("click", () => { 
    const dayMode = document.querySelector(".hobby");
    dayMode.classList.toggle("illumi");
});

//Conta i paragrafi
window.addEventListener( "click", () => {
let paragrafi = document.getElementsByTagName("p");
console.log(paragrafi)
},
{once: true}
)

//Test

const puno = document.querySelector("#uno");
    puno.addEventListener("click", () => {
    const ppuno = document.querySelector("#tre");
    ppuno.classList.toggle("uno");
    const pppuno = document.querySelector("#uno");
    pppuno.classList.toggle("uno");
});

const pdue = document.querySelector("#due");
    pdue.addEventListener("click", () => {
    const ppdue = document.querySelector("#due");
    ppdue.classList.toggle("due");
    const pppuno = document.querySelector("#quattro");
    pppuno.classList.toggle("due");
});

const ptre = document.querySelector("#tre");
    ptre.addEventListener("click", () => {
    const pptre = document.querySelector("#tre");
    pptre.classList.toggle("tre");
    const ppptre = document.querySelector("#cinque");
    ppptre.classList.toggle("tre");
});

const pquattro = document.querySelector("#quattro");
    pquattro.addEventListener("click", () => {
    const ppquattro = document.querySelector("#quattro");
    ppquattro.classList.toggle("quattro");
    const pppquattro = document.querySelector("#uno");
    pppquattro.classList.toggle("quattro");
});

const pcinque = document.querySelector("#cinque");
    pcinque.addEventListener("click", () => {
    const ppcinque = document.querySelector("#cinque");
    ppcinque.classList.toggle("cinque");
    const pppcinque = document.querySelector("#due");
    pppcinque.classList.toggle("cinque");
});

//Operazione somma
    const somma = document.querySelector(".sommami");
    somma.addEventListener("click", () => {
    let numbersChoise = prompt ('inserisci due numeri divisi da una ",": ');
    const numbers = numbersChoise.split(',')

    const putNumb = [];

    for(x of numbers) {
        putNumb.push(parseInt(x))
    }
        
        const sum = (numOne, numTwo) => numOne + numTwo;

        function calcolo(operation) {
        let totSum = 0;
        totSum = operation(...putNumb)
        return totSum;
        }

        calcolo(sum)
        
        setTimeout (() => {console.log(calcolo(sum))}, 5000);
    
})

let intervSet;

const changeColor = () => {
    if (intervSet) {
        intervSet = setInterval(flashC, 1000);
    }
};

const flashC = () => {
    const cerchio = document.querySelector("#cerchio");
    if (cerchio.className === "colorOne" ) {
        cerchio.className = "colorTwo";
    } else {
        cerchio.className = "colorOne";
    }
};

document.addEventListener("keypress", (event) => {
    if (event.key === "enter") {
        clearInterval(intervSet);
        intervSet = null;
    } else if (event.key === " ") {
        colorOne();
    }
});