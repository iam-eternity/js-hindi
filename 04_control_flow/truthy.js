const userEmail = []
if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user email");
}
// falsy values ->
// false, 0 ,-0, BigInt 0n,"",NULL, Undefined, Nan
// truthy values ->
// "0", "false"," ", [],{},function() {}

if (userEmail.length === 0) {
    console.log("Array is empty");
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Nullish Coalescing Operator (??): null undefined   
let val1;
// val1 = 5 ?? 10; // 5 assign
val1 = null ?? 10; // 10 assign
// val1 = null ?? 10 ?? 10; // first value assign hoti h 
console.log(val1);

// Terniary Operator
// condition ? true : flase
const teaPrice = 100;
teaPrice > 90 ?console.log("Will buy") : console.log("Not buy");