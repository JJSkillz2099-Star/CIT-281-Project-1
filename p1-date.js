/*
    CIT 281 Project 1
    Name: Jared Skilowitz
    I did this with help from https://www.w3schools.com/JSREF/jsref_getday.asp
*/

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentDay = new Date();
let today = weekdays[currentDay.getDay()];
console.log(today);
