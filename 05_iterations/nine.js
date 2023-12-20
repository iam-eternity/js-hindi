// reduce in javascript

const myNums = [1,2,3]
const total = myNums.reduce(function (acc,curVal) {
    console.log(`acc ${acc} and ${curVal}`);
    return acc+curVal
},0)
const myTotal = myNums.reduce((acc,myVal) => {
     return acc + myVal
},0)
// console.log(myTotal);
const shoppingCart = [
    {
        itemName: "jsCourse",
        price: 2999
    },
    {
        itemName: "pythonCourse",
        price: 7999
    },
    {
        itemName: "javaCourse",
        price: 4999
    },
    {
        itemName: "dataScienceCourse",
        price: 12999
    }
]
const priceToPay = shoppingCart.reduce((acc,item) => (acc+item.price),0)
console.log(priceToPay);