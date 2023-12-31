// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


// Reference (Non primitive)

/*
    Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
    
*/



// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "aakash",
    age: 21,
}
console.log(myObj)

const myFunction = function (){
    console.log("Namste World")
}
myFunction()


// ++++++++++++++++++++++++++++++

// Stack Memory (Primitive) [copy], Heap Memory (Non-Primitive) [reference]

let myName = "Aakash Sharma"
let anotherName = myName
anotherName = "Shuma Gorath"
console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "use@3$1"
}
let userTwo = userOne

userTwo.email = "user2@ggg.com"

console.log(userOne.email)
console.log(userTwo.email)