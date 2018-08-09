// get input elements
var userField = document.querySelector('#username')
var emailField = document.querySelector('#email')
var passwordFiel = document.querySelector('#password')
var conformedPasswordField=document.querySelector('#passwor_confirm')

// get validation message elements
var userError=document.querySelector('#name_error')
var emailError=document.querySelector('#email_error')
var passwordError=document.querySelector('#password_error')


// add blur event
userField.addEventListener('blur',verifyUser)
emailField.addEventListener('blur',verifyEmail)
passwordFiel.addEventListener('blur',verifyPassword)
conformedPasswordField.addEventListener('blur',verifConfirmedPassword)

function validate() {
    var isValid=false
    // requred username validation
        if(userField.value===''){
            displayErrorMessage(userField,userError,'User Name Required')

            isValid=false
            return isValid
        }
    // recquired email
    if(emailField.value===''){
        displayErrorMessage(userField,userError,'email Required')
        isValid=false
        return isValid
    }
    // required password validation
    if(passwordFiel.value===''){
        displayErrorMessage(passwordFiel,passwordError,'password Required')
        isValid=false
        return isValid
    }
    // recquired conformed passwoed field
    if(conformedPasswordField.value===''){
        displayErrorMessage(conformedPasswordField,passwordError,'Confirm Password Required')
        isValid=false
        return isValid
    }
    // passwording matching validation

    if(passwordFiel.value!== conformedPasswordField.value){
        passwordFiel.style.borderColor='red'

    }


    if(isValid === false){
        return isValid
    }
    else {
        alert('Form Submited')
        return true
    }

    return isValid
}

function displayErrorMessage(inputField,errorField,message) {
    inputField.style.borderColor='red'
    inputField.style.backgroundColor='lightsalmon'
    errorField.textContent='User Name recquired'
    errorField.style.color='red'
}
function verifyUser() {
    userField.style.borderColor='grey'
    userField.style.backgroundColor='white'
    userError.textContent=""
}
function verifyEmail() {
    emailField.style.borderColor='grey'
    emailField.style.backgroundColor='white'
    emailError.textContent=""
}
function verifyPassword() {
    passwordFiel.style.borderColor='grey'
    passwordFiel.style.backgroundColor='white'
    passwordErrorError.textContent=""
}
function verifConfirmedPassword() {
    conformedPasswordField.style.borderColor='grey'
    conformedPasswordField.style.backgroundColor='white'
    passwordError.textContent=""

}