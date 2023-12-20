const programming = ["java","c++","python","javascript"]
programming.forEach( function(item) {
    console.log(item);
} )
programming.forEach( (item) => {
    console.log(item);
} )

function printMe(item) {
    console.log(item);
}

programming.forEach(printMe)

programming.forEach( (item, index, programming) => {
    console.log(item,index,programming);
})

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.langName);
})
