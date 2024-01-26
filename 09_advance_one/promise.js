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
        resolve({username: 'Beyonder', powers: 'Reality warping \n Nigh-omnipotence', origin: 'Beyond Realm', firstApperarence: 'Secret Wars 1'})
    },1000)
})
async function consumePromise5() {
    console.log(resolve);
}