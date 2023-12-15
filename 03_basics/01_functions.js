function sayMyName() {
    console.log("Lucifer Morningstar")
}

// sayMyName()

function addTwo(num1,num2) // parameters
{   
    // console.log(num1 + num2);
    let result = num1 + num2
    return result
}
addTwo(3,"a") // arguments
console.log("Result : ", addTwo(2,4));

// const result = addTwo(2,4)
// console.log(result);  // undefined 

function loginUserMs (username) {
    if(!username) {  // (username === undefined)
        console.log("Plzz enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMs("Aakash"))
console.log(loginUserMs())




