// Declare Variables: Declare a variable using var, let, and const.
    //   Try to re-declare each of above declared variables and print results/errors in html page.
    //   Try to change the value of each of above declared variables and print results/errors in html page.

var x = 10;
document.getElementById("dec1").innerText = "declared var x = "+x;
    x = 29;
document.getElementById("dec2").innerText = "Re-declare the variables   x = "+x;

let y = 10;
document.getElementById("dec3").innerText = " declared let y = "+y;
    y = 200;

document.getElementById("dec4").innerHTML = " re-declared y = "+y;
// let y;
document.getElementById("dec5").innerHTML = "SyntaxError: Identifier 'y' has already been declared";

const z = 20;

document.getElementById("dec6").innerHTML = " Declared Const z = "+z;
z=22;
console.log(z);
document.getElementById("dec7").innerHTML = "const z cant be re-declared";

let str = "name";
let num = 123;
let boolean = true;
let empty = undefined;
let nul = null;
let sym = Symbol("@");
let obj = { name:"str",name2:"str"};

document.getElementById("nn").innerHTML = "const z cant be re-declared";

document.getElementById("11").innerHTML = "let str = ";


