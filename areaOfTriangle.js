var sides = document.querySelectorAll(".input-side");
var outputElement = document.querySelector("#output");
var evaluateAreaBtn = document.querySelector("#find-area");

function productOfSides(a,b){
    var product = a*b;
    return(product);
}

function calculateArea(){
    var area = (productOfSides(Number(sides[0].value), Number(sides[1].value))/2);
    outputElement.innerText=("area of triangle is ") + area +("cm sq");
}

evaluateAreaBtn.addEventListener("click" , calculateArea)

