// Get all required elements from the Document
const input = document.querySelector('.input')
const form = document.getElementById('form')
const result = document.querySelector('.result')

// Write all your functions
function showSuccess(input, msg) {
    input.parentElement.className = 'input-grp success'
    const small = document.querySelector('.small')
    small.innerText = msg
}
function showError(input, msg) {
    input.parentElement.className = 'input-grp error'
    const small = document.querySelector('.small')
    small.innerText = msg
}

function checkOddEve(input) {
    const val = input.value
    if (val % 2 === 0) {
        result.innerText = 'Allowed on M/W/F'
    } else {
        result.innerText = 'Allowed on T/T/S'
    }
}


function checkLength(input) {
    const val = input.value
    if (val > 999 && val < 10000) {
        showSuccess(input, 'Looks Good')
        checkOddEve(input)

    }
    else {
        showError(input, 'Invalid')
    }
}

function checkRequired(input) {
    if (input.value === '') {
        showError(input, 'Required')
    }
    else {
        checkLength(input)
    }
}


// All your Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired(input)
})