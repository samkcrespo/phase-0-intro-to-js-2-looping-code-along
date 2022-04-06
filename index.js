function writeCards(names, newEvent) {
    const thankYous = [];
    for (let i = 0; i<names.length; i++){
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${newEvent} gift!`)
    }
    return thankYous;
}

// writeCards(["Guadalupe", "Ollie", "Aki"], "Surprise");
function countDown() {
let i = 10;
while (i >= 0) {
    console.log(i--);
}
return countDown;
} // Code your solutions in this file
