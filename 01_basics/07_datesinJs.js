// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0 , 23)
let myCreatedDate = new Date(2023, 0 , 23, 5, 3)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
let myDate2 = new Date("2023-12-14")
console.log(myDate2.toLocaleString())

// TimeStamps

let myTimeStamp = Date.now()

// console.log(Math.floor(myTimeStamp/1000))
// console.log(myCreatedDate.getTime());

let newDate = new Date()

console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})
   