var inputs = document.querySelectorAll(".angle-input");
var isTriangleBtn = document.querySelector("#is-triangle-button");
var outputElement = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    var sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle(){
    if(inputs[0].value<=0 || inputs[1].value<=0 || inputs[2].value<=0){
        outputElement.innerText=("Enter some valid positive values");
    }else{
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles===180){
        outputElement.innerText="Forms a triangle"
    }
    else{
        outputElement.innerText="Does not form a triangle"
    }
}

}

isTriangleBtn.addEventListener("click",isTriangle);