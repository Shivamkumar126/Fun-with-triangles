var sides = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#hypotenuse-btn");
var outputElement = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    var sumOfSquares = (a*a)+(b*b);
    return sumOfSquares;
}

function calculateHypotenuse(){
     var sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
     const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
     outputElement.innerText = "The length of hypotenuse is "+ lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);