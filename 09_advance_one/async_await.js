// // Async/Await = Async = makes a function return a promise
// //                           Await = makes an async function wait for a promise

// // Allows you write asynchronous code in a synchronous manner
// // Async doesn't have resolve or reject set up as parameters
// // Everything after Await is placed in an event queue

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("You walk the dog 🐕");
//             }
//             else{
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve("You clean the kitchen 🧹");
//             }
//             else{
//                 reject("You DIDN'T clean the kitchen");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if(trashTakenOut){
//                 resolve("You take out the trash ♻");
//             }
//             else{
//                 reject("You DIDN'T take out the trash");
//             }

//         }, 500);
//     });
// }

// async function doChores(){

//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);
    
//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);
    
//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);
        
//         console.log("You finsihed all the chores!");
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// doChores();
function makeRequest(location) {
    return new Promise((res,rej) => {
        console.log(`Making request to ${location}`);
        if (location === 'Google') {
            res('Google says Hi')
        } else {
            rej('Error: Something went wrong')
        }
    })
}

function processReq(response) {
    return new Promise((res, rej) => {
        console.log('Processing Resposne');
        res(`Extra Information + ${response}`)
    })
}
// makeRequest('Facebook').then(data => {
//     console.log('Data Received');
//     return processReq(data)
// }).then(processRes => {
//     console.log(processRes);
// }).catch(err => {
//     console.log(err);
// }) 
async function doWork() {
    const response = await makeRequest('Google')
    console.log('Response Received');
    const processedResponse = await processReq(response)
    console.log(processedResponse);
}
doWork()