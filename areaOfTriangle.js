var sides = document.querySelectorAll(".input-side");
var outputElement = document.querySelector("#output");
var evaluateAreaBtn = document.querySelector("#find-area");

function productOfSides(a,b){
    var product = a*b;
    return(product);
}

function calculateArea(){
    if(sides[0].value<=0 || sides[1].value<=0){
        outputElement.innerText=("enter a valid positive value");  
    }
    else{
        
    var area = (productOfSides(Number(sides[0].value), Number(sides[1].value))/2);
    outputElement.innerText=("area of triangle is ") + area +("cm sq");
    }
}

evaluateAreaBtn.addEventListener("click" , calculateArea)

