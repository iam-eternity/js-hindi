const tinderUser = new Object()


tinderUser.id = "123a"
tinderUser.name = "Beyonder"
tinderUser.isLoggedIn = false
console.log(tinderUser)
const regularUser = {
    email: "aaks@123",
    full_Name : {
        user_FullName:  {
            firstname :"Lucifer",
            lastName: "MorningStar"
        }
    }
}
console.log(regularUser.full_Name.user_FullName.firstname)

const obj1 = {1: "A", 2: "B"}
const obj2 = {1: "a", 2: "b"}
// const obj3 = {obj1, obj2}
// assign: Copy the values of all of the enumerable own properties from one or more source objects to a target object.
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3)
const users = [
    {
        id: 1,
        email: "aakaa@123"
    },
    {
        id: 2,
        email: "aakaas@123"
    },
    {
        id: 3,
        email: "aakaash@123"
    }
]

console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring
const course = {
    course: "js in hindi",
    price: 999,
    course_ins: "hitesh"
}

// const {course_ins} = course
// console.log(course_ins);
const {course_ins : ins} = course
console.log(ins);

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")
