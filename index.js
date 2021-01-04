// Code your solutions in this file
let names = ["Evan", "Shelby", "Rob"];
let theEvent = ["birthday"];

function writeCards(names, theEvent) {
    let result = [];
    for (let i = 0; i < names.length; i++) {
        result.push(`Thank you, ${names[i]}, for the wonderful ${theEvent} gift!`);
    }
    return result;
}
writeCards(names, theEvent);

let number = 10;
function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}