const form = document.querySelector("form");
// this usecase will give u empty values
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const BMI = (weight / ((height*height)/10000)).toFixed(2);
    // Show the result
    results.innerHTML = `<span> ${BMI} </span>`
    if (BMI < 18.6) {
        results.innerHTML = 'You are under Weight'
    } else if (BMI >= 18.6 && BMI <= 24.9) {
        results.innerHTML = 'You are normal Weight'
    } else {
        results.innerHTML = 'You are OverWeight'
    }
}
});
