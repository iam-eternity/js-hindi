// for loop
// for (let i = 1; i < 10; i++) {
//     if (i == 5) {
//         console.log("5 is the best number")
//     }      
//     console.log(i);
// }
// for(let i = 1; i <= 5; i++) {
//     console.log(`Outer loop value ${i}`);
//     for(let j = 1; j <= 5; j++) {
//         console.log(i + " * " + j + " = " + i*j);
//     }
// }

const myArr = ["Flash", "Batman", "Superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// break and continue
for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        break; 
    }
    console.log(`Value of index : ${index}`);   
}
for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        continue; 
    }
    console.log(`Value of index : ${index}`);   
}