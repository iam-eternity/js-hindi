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
// console.log(loginUserMs("Aakash"))
// console.log(loginUserMs())

function calcCartPrice(val1, val2,...num1)  // ... rest operator here
{
    return num1
}

console.log(calcCartPrice(200,400,500,400))

const user = {
    username: "aakash",
    price: 123
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handle     Object(user)
handleObject({
    username: "clark kent",
    price: 145
})

const myNewArray = [200,400,600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));