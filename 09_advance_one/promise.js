const promise1 = new Promise((res,rej) => {
    setTimeout(() => {
        console.log('Miachel Korvac');
        console.log('Async task complete');
        rej()
    },3000)
})
console.log('Amatsu Mikaboshi');
promise1.then(() => {
    console.log('promise consumed');
})
.catch((err) => {
    console.log('error catched');
})