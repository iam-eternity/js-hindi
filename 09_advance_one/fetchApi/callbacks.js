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

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('Miachel Korvac');
        console.log('Beyonder');
        res()
    }, 2000)
})
console.log('Amatsu Mikaboshi');
promise1.then(() => {
    console.log('Promise Consumed');
}).catch((err) => {
    console.log('Error Catched');
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({first_name: 'Aakash' , last_name: 'Sharma', roll_no: 12, nickname: 'eternity'})
    }, 3000)
})
promise2.then((user) => {
    console.log('Promise Consumed');
    console.log(user.first_name);
    return user
})
.then((user) => {
    console.log(user.last_name);
})

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            res({type: 'Villian', name: 'Galactus', origin: 'Earth-616', fullName: 'Galan of Taa', weapon: 'Ultimate Nullifier'})
        } else {
            rej('ERROR: 404')
        }
    }, 4000)  
})

// promise3.then((villian) => {
//     console.log(villian.fullName);
//     return villian
// })
// .then((villian) => {
//     console.log(villian.weapon);
//     return villian
// })
// .catch((error) => {
//     console.log(error);
// })

async function consumePromise3() {
    try {
        const response = await promise3
        console.log(response);
        console.log(response.origin);
    } catch(error) {
        console.log(error);
    }
}
consumePromise3()