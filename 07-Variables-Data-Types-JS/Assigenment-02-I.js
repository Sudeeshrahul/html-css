const str = "String";
document.getElementById("s1").innerHTML = "1. String---convert-to---String"+" = "+String(str);
document.getElementById("s2").innerHTML = "2. String---convert-to---Number"+" = "+Number(str);
document.getElementById("s3").innerHTML = "3. String---convert-to---Boolean"+" = "+Boolean(str);
document.getElementById("s4").innerHTML = "4. String---convert-to---object"+" = "+Object(str);
document.getElementById("s5").innerHTML = "5. String---convert-to---symbol"+" = "+Symbol(str).toString();

const num = 123;
document.getElementById("n1").innerHTML = "1. Number---convert-to---String"+" = "+String(num);
document.getElementById("n2").innerHTML = "2. Number---convert-to---number"+" = "+Number(num);
document.getElementById("n3").innerHTML = "3. Number---convert-to---boolean"+" = "+Boolean(num);
document.getElementById("n4").innerHTML = "4. Number---convert-to---object"+" = "+Object(num);
document.getElementById("n5").innerHTML = "5. Number---convert-to---symbol"+" = "+Symbol(num).toString();
document.getElementById("n6").innerHTML = "6. Number---convert-to---String"+" =  Error";
document.getElementById("n7").innerHTML = "7. Number---convert-to---String"+" =  Error"; 

const isboolean = true;
document.getElementById("b1").innerHTML = "1. boolean---convert-to---String"+" = "+String(isboolean);
document.getElementById("b2").innerHTML = "2. boolean---convert-to---number"+" = "+Number(isboolean);
document.getElementById("b3").innerHTML = "3. boolean---convert-to---boolean"+" = "+Boolean(isboolean);
document.getElementById("b4").innerHTML = "4. boolean---convert-to---object"+" = "+Object(isboolean);
document.getElementById("b5").innerHTML = "1. boolean---convert-to---String"+" = "+Boolean(isboolean);