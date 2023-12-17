// IMMIDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// Global scope ke pollution se bachane ke liye iife ka use krte h

(function chai() {
    // named iife
    console.log("DB connected");
})(); // This semi colon is needed bcz 
( (name) => {
    // simple iffe or unnamed
    console.log(`DB connected Two ${name}`);
} )("Aakash")

