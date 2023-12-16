
let a = 400

if (true) { // inside this if everthing is block scope evrything is global scope
  let a = 10;
  const b = 20;
  var c = 30; // by default variables are declared with var keyword
  console.log("Inner : ", a);
} 

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);


function one() {
    const username = "Aakash"
    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
} 
one()
if (true) {
    const username = "Beyonder"
    if (username === "Beyonder") {
        const website = "youtube"
        console.log(username + 
         website);
    }
    // console.log(website);

}

// console.log(username);

// ################### Interesting #################

function addone(num) {
    return num  + 1
}
console.log(addone(4))
const addTwo = function(num) { // expressions
    return num + 2
}
addTwo(2)
