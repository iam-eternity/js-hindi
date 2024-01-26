// const promise1 = new Promise((res,rej) => {
//     setTimeout(() => {
//         console.log('Miachel Korvac');
//         console.log('Async task complete');
//         res()
//     },3000)
// })
// console.log('Amatsu Mikaboshi');
// promise1.then(() => {
//     console.log('promise consumed');
// })
// .catch((err) => {
//     console.log(err);
//     console.log('error catched');
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({userName: 'Miachel', fullName: 'Miachel Korvac', height: 7, earth: '(Earth-691)'})
//     })
// })

// promise2
// .then((hero) => {
//     console.log(hero.userName);
//     // Return the hero object
//     return hero
// })
// .then((hero) => {
//     console.log(hero.fullName);
//     return hero
// })
// .then((hero) => {
//     console.log(hero.earth);
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = true
//         if (!error) {
//             resolve({userName: 'Galactus', fullName: 'Galan of Taa', type: 'cosmic being', weapon: 'ultimate nullifier', earth: '(Earth-616)'})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })
// promise3
// .then((villian) => {
//     console.log(villian.fullName);
//     return villian // to get this value we will use chaining by again suing then inside then we will get the value returned by the above function
// })
// .then((villian) => {
//     console.log(villian);
//     return villian.weapon
// })
// .then((weapon) => {
//     console.log(weapon);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => console.log('The promise is either resolved or rejected'))

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: 'Beyonder', powers: 'Reality warping \nNigh-omnipotence', origin: 'Beyond Realm', firstApperarence: 'Secret Wars 1'})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})
async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
        // Return the resolved value
        return response // if we do not return response then the consumePromise5 function returns a promise itself, and when you use consumePromise5().then(...), you are trying to handle the result of the outer promise, not the result of the await promise5 within the consumePromise5 function.
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()
// .then((res) => {
//     console.log(res.origin);
// })

async function getAllUsers() {
    try {
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json(); // Parse response as JSON
        console.log(data.fact);
    } 
    catch(error) {
        console.log('Error : ', error);
    }
}
// getAllUsers()
fetch('https://official-joke-api.appspot.com/random_joke')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(`${data.setup} \n${data.punchline}`);
})
.catch((error) => console.log(error))
