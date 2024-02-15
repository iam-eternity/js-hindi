const accountId = 144553
let accountEmail = "hitesh@google.com"
console.log(accountEmail);
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
function f() {
 
    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();
 
// A cannot be accessible
// outside of function
// console.log(a);

// let name = 'Aakash'
// name = 'Aak'
// console.log(name);

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// an object whose properties are objects

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);