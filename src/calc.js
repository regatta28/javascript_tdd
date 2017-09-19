Calculator = function(){
    this.value = 0;
};

 Calculator.prototype.add = function(number) {
     if (typeof(number) == "number") {
         this.value += number;
     } else {
         alert("Argument must be a number");
     }
 };


function subtract (firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number") {
        
     
    var Subtract = firstNumber - secondNumber;
    return Subtract;
    } else {
        alert("Argument must be a number");
    }
}
function multiply (firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number") {
    var Multiply = firstNumber * secondNumber;
    return Multiply;
} else {
        alert("Argument must be a number");
    }
}
function divide (firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number") {
    var Divide = firstNumber / secondNumber;
    return Divide;
} else {
        alert("Argument must be a number");
    }
}


