const myObj = {
    js: "javascript",
    cpp: "C++",
    java: "Java",
    py: "Python"
}

for (const key in myObj)  {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["java","c++","python","javascript"]

for (const key in programming) {
    console.log(programming[key]);
}