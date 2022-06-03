/*
    CIT 281 Project 1
    Name: Jared Skilowitz
    I did this with help from https://www.w3schools.com/js/js_string_methods.asp
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomString() {
    let word = "abcdefghijklmnopqrstuvwxyz";
    let randomWord = ""
    let length = getRandomInteger(5, 26);
    for (i = 0; i < length; i ++) {
        randomWord += word.charAt(Math.random() * word.length);
    }
    console.log(randomWord);
}
randomString();
