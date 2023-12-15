// singleton - If we declare objects as literals then it will not be singleton .However when we declare as constructor then it will be singleton

// object literals

const mySym = Symbol("key1")

const jsUsers = {
    name: "Aakash",
    "full_name": "Aakash Sharma",
    [mySym]: "mykey1",
    age: 19,
    location: "Kanpur",
    email: "aaakash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday"]
}
console.log(jsUsers.name)
console.log(jsUsers["name"])
console.log(jsUsers["full_name"])

console.log(typeof jsUsers.mySym)
console.log(typeof jsUsers[mySym])

jsUsers.name = "Amatsu Mikaboshi"

console.log(jsUsers)
// Object.freeze(jsUsers)
jsUsers.full_name = "Bruce Wayne"
console.log(jsUsers)

jsUsers.greeting = function() {
    console.log("Hello JS users")
}
jsUsers.greeting2 = function() {
    console.log(`Hello JS user, ${this.full_name}`)
}

console.log(jsUsers.greeting())
console.log(jsUsers.greeting2())

