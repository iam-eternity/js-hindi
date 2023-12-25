const form = document.querySelector('form')
// this usecase will give u empty values
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid Height'
    }
})