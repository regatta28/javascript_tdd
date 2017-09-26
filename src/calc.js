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


Drink = function(){
    this.value = 0;
};

function noLessThan0 (age, secondAge) {
    var olderthanzero = age < secondAge;
    var sorry = true;
    if(olderthanzero = true){
    return sorry;
    }
    
}
function lessThan14 (age, secondAge) {
    var youngerthan14 = age < secondAge;
    if(youngerthan14 = true) {
        return youngerthan14;
    }
}
function lessThan18 (age, secondAge) {
    var youngerThan18 = age < secondAge;
    if(youngerThan18 = true) {
        return youngerThan18;
    }
}
function lessThan21 (age, secondAge) {
    var youngerThan21 = age < secondAge;
    if(youngerThan21 = true) {
        return youngerThan21;
    }
}
function lessThan130 (age, secondAge) {
    var youngerThan130 = age < secondAge;
    if(youngerThan130 = true) {
        return youngerThan130;
    }
}
function moreThan130 (age, secondAge) {
    var moreThan130 = age > secondAge;
    if(moreThan130 = true) {
        return moreThan130;
    }
}



Fizzy = function(){
    this.value = 0;
};

function FizzBuzz(number) {
    if(number%3 === 0 && number%5 === 0) {
        return true;
    }
}
function Fizz(number) {
    if(number%3 === 0) {
        return true;
    }
}
function Buzz(number) {
    if(number%5 === 0) {
        return true;
    }
}
function notdivide(number) {
    var notdivisable = number%5 === false;
    if(notdivisable = true) {
        return notdivisable;
    }
}



Name = function(){
    this.value = 0;
};

function WholeName(name, secondName) {
    var wholeName = name + " " + secondName;
    if(wholeName = true){
    
        return wholeName;
    }
}
function wrongName(name, secondName) {
    var wrongName = name + " " + secondName;
    if(wrongName = false){
    
        return wholeName;
    }
}
function Nll(data) {
    if (data = null){
        return true;
    }
}

