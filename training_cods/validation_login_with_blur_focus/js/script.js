let $ = document

let usernameInput = $.querySelector('.username')
let passwordInput = $.querySelector('.password')

let usernameMessage = $.querySelector('.username-validation')
let passwordMessage = $.querySelector('.password-validation')

function usernameValidation() {
    if (usernameInput.value.length < 12) {
        usernameMessage.innerHTML = 'Must Contain 12 Characters (Min)'
        usernameMessage.style.color = 'red'
        usernameMessage.style.display = 'block'
    } else {
        usernameMessage.innerHTML = 'Correct username Value'
        usernameMessage.style.color = 'green'
        usernameMessage.style.display = 'block'
    }
}

function passwordValidation() {
    if (passwordInput.value.length < 8) {
        passwordMessage.innerHTML = 'Must Be 8 Characters (Min)'
        passwordMessage.style.color = 'red'
        passwordMessage.style.display = 'block'
    } else {
        passwordMessage.innerHTML = 'Correct Password Value'
        passwordMessage.style.color = 'green'
        passwordMessage.style.display = 'block'
    }
}