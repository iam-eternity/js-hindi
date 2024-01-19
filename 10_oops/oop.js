const user = {
    username : "Miachel Korvac",
    loginCount : 5,
    signedIn: true,

    getuserDetails: function()  { // 
        // In JavaScript, when you use an arrow function (() => {}), it does not have its own this context. Instead, it captures the this value from the surrounding lexical context. This behavior is known as lexical scoping.
        // console.log('Got user details from database');
        console.log(`Username -> ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
console.log(user.getuserDetails());

// console.log(this);

// const promise1 = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username // this.username i s variable here
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function() {
        console.log(`Welcome -> ${this.username}`);
    }

    return this // (not necessary)
}
// new KEYWORD -> When we use new keyword an empty object is created which is called Instance
// Constructor function is called bcz of new Keyword
// This keyword injects it
const User1 = new User('Dr. Manhattan', 19, true)
const User2 = new User('Lucifer Morningstar', 31, false)
console.log(User1);
console.log(User2.constructor);
// instanceOf -> to check is same