hello(leave);

function hello(callback) {
    console.log("Hello");
    callback()
}
function leave() {
    console.log('Leave');
}
function goodBye() {
    console.log("GoodBye");
}

sum(displayRes, 5, 4)
function sum(callback, x, y) {
    let result = x + y
    callback(result); 
}
function displayRes(result) {
    console.log(result);
}