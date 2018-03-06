console.log("Hello SE");

const pi = 3.1444;
var number_1 = 20;
var number_2 = 20.50;
var txt = "Hello SE";
var arry = Array("SE", "IT", "CS");
var obj = {"fname": "Jinawat", "lname": "Vitee"};

console.log("pi : " + pi);
console.log("number_1 : " + number_1);
console.log("number_2 : " + number_2);
console.log("txt : " + txt);
console.log("arry : " + arry);
console.log(obj);

arry.forEach(element => {
    console.log(element);
});

arry.forEach(function(element, index) {
    console.log("arry[" + index + "] : " + element);
});