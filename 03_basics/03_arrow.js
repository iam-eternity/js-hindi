const user = {
    username : "Aakash",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }

}
// user.welcomeMsg()

// user.username = "Doctor Doom"
// user.welcomeMsg()
// console.log(this);  // empty object

// Browser ke andar jo global object h wo h windows

// function chai() {
//     let username = "Aakash" // this cannot be accessed through this.username bcz it can be accessed through object 
//     console.log(this);
// }
// chai()

// const chai = function() {
//     let name = "Aakash"
//     console.log(this.name);
// }
// chai()   // undefined

// const chai = () => {
//     let username = "Lucifer"
//     console.log(this.username); 
// }
// chai() // undefinded

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,5));
// const addThree = (num1, num2, num3) =>  num1 + num2 + num3  // implicit return

// OR

const addThree = (num1, num2, num3) =>  (num1 + num2 + num3)  

console.log(addThree(2,5,7));

const add1 = (num1 , num2) => ({username : "Aakash"})

console.log(add1(3,4));