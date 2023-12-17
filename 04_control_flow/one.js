// if Statement
const isUserloggedIn = true
const temp = 41
if (temp < 50) { // if the condition is a false then the code will not execute
    console.log("Executed");
} else {
    console.log("Temprature is greater than 50");
}
// == checks the value
// === strict checking also checks the data 

const score = 200
if (score > 150) {
    const power = "fly"
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); If we used var keyword instead of const or let to declare power insde the if block then this code will no error. Hence we generally dont use var keyword for declaring variables

const val = 1900;
if (val > 12) console.log("Yay"); // Implicit Block

if (val < 500) {
    console.log("less than");
} else if (val < 1400) {
    console.log("less than 1400");
} else if (val <1500) {
    console.log("less than 1500");
} else if (val < 1800) {
    console.log("less than 1800");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy the course");
}


