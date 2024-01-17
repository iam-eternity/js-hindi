const promise1 = new Promise(function(resolve,  reject) {
    // Do an async task
    // DB calls, Network Calls
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    },1000)
});
console.log('HI');
promise1.then(() => {
    console.log('Promise consumed');
})
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function() {
    console.log('Async 2 resolved');
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Maichel Korvac", email: "miachel@korvac@gmail.com"})
    },1000)
})
promise3.then((user) => {
    console.log(user.email);
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // true false
        let error = false
        if (!error) {
            resolve({username : "aakash", password: "12121"})
        } else {
            reject('ERROR: something went wrong')
        }
    },1000)
})
promise4.then((user) => {
    console.log(user);
    return user.username // to get this value we will use chaining by again suing then inside then we will get the value returned by the above function
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'))
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: 'javascript', password: '121121'})
        } else {
            reject('ERROR: jS went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promise5
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() // we need put await bcz parsing string into json takes time
        console.log(data);
    } catch (error) {
        console.log('E: ', error);
    }
}
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

