"use strict"

let result = 0;
let operand;
let num = [];

while( operand = +prompt('Прибавить число', '') ) {
    num.push( operand );
    result += operand;
}

num = num.join(' + ');

document.getElementById("demo").innerHTML = `${num} = ${result}`