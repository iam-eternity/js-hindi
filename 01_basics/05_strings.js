const name = "Aakash"
const repoCount = 50
// console.log(name + repoCount + " Value") bad practice

// String Interpolation
console.log(`Hello my name is ${name} and mu repo count is ${repoCount}`) 

const gameName = new String('aakash-sh')

console.log(gameName[0])
console.log(gameName.__proto__)

console.table([gameName.length,gameName.toUpperCase, gameName.charAt(2), gameName.indexOf('a')])

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-8,4)

console.log(anotherString)

const newString1 = "  aakash      "

console.log(newString1)
console.log(newString1.trim())

const url = "https://aakutu.com"

console.log(url.replace('akutu','ktu'))
console.log(url.includes('tu'))

console.log(gameName.split('-'))