const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// const all_Heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_Heroes)

const all_new_Heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_Heroes)

const another_Array = [1,2,3, [4,5,6] ,7, [6,7, [4,5]]]
const usable_another = another_Array.flat(Infinity)
console.log(usable_another) 

console.log(Array.isArray("Aakash"))
console.log(Array.from("Aakash"))
console.log(Array.from({name: "AAKASH"}))  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))