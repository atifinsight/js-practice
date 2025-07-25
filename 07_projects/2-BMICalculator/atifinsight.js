const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const final_weight = document.querySelector('#final_weight')
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`
        
        const bmiValue = parseFloat(bmi)  // Convert back to number


        if (bmiValue < 18.6) {
            final_weight.innerHTML = '<span>Under Weight</span>'
        } else if(bmiValue > 18.6 && bmiValue < 24.9){
            final_weight.innerHTML = '<span>Normal Weight</span>'
        } else if(bmiValue > 24.9){
            final_weight.innerHTML = '<span>Over Weight</span>'
        } else {
            final_weight.innerHTML = '<span>Not in range Please give correct height and weight</span>'
        }
    
    }

})