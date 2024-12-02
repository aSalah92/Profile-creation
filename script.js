//Events
let container = document.querySelector('.container')

let containerOfMain = document.querySelector('.container-of-main')
let loginBtnMain = document.querySelector('.log-in-btn-main')
let signupBtnMain = document.querySelector('.sign-up-btn-main')

//login page
let loginPage = document.querySelector('.log-in')
let loginUsername = document.querySelector('#log-in-username')
let loginPassword = document.querySelector('#log-in-password')
let labelLoginUsername = document.querySelector('#label-username')
let labelLoginPassword = document.querySelector('#label-password')
let loginBtn = document.querySelector('#log-in-btn-secondary')
let loginErrorMsg = document.querySelector('#log-in-error-message')

//signup page
let signupPage = document.querySelector('.sign-up')
let firstNameInput = document.querySelector('#first-name')
let lastNameInout = document.querySelector('#last-name')
let signupEmail = document.querySelector('#sign-up-email')
let signupUsername = document.querySelector('#sign-up-username')
let signUpPassword = document.querySelector('#sign-up-password')
let signupBtn = document.querySelector('#sign-up-btn-secondary')
let labelSignUpUsername = document.querySelector('#label-sign-up-username')
let labelEmail = document.querySelector('#label-email')
let signupErrorMsg = document.querySelector('#signup-error-message')

//home page
let homePage = document.querySelector('.home-page')
let welcomeMsg = document.querySelector('#welcome-msg')
let firstP = document.querySelector('#first-p')
let secondP = document.querySelector('#second-p')
let thirdP = document.querySelector('#third-p')
let signOutBtn = document.querySelector('#sign-out-btn')

//Creation function
class CreateProfile {
    constructor(firstN, lastN, email, userN, password) {
        this.firstN = firstN
        this.lastN = lastN
        this.email = email
        this.userN = userN
        this.password = password
    }
}

//Main buttons
loginBtnMain.addEventListener('click', function(){
    signupPage.style.opacity = '0'
    setTimeout(()=>signupPage.style.display = 'none',500)
    setTimeout(()=>{
        
        loginPage.style.display = 'block'
        setTimeout(()=>loginPage.style.opacity = '1',500)
    },500)
})

signupBtnMain.addEventListener('click', function(){
    loginPage.style.opacity = '0'
    setTimeout(()=>loginPage.style.display = 'none',500)
    setTimeout(()=>{
        
        signupPage.style.display = 'block'
        setTimeout(()=>signupPage.style.opacity = '1',500)
    },500)
})

// Signup button
let profiles = [];
signupBtn.addEventListener('click', function(){
    event.preventDefault()

    //patterns
    let firstNamePattern = /\w{2,}/
    let lastNamePattern = /\w{2,}/
    let emailPattern = /^[\w\d\S]+[@]\w+[.](com|org)$/
    let usernamePattern = /[\w|\d]{2,}/
    let passwordPattern = /[\w\d]+/
    
    if(firstNameInput.value.match(firstNamePattern)&&lastNameInout.value.match(lastNamePattern)&&signupEmail.value.match(emailPattern)&&signupUsername.value.match(usernamePattern)&&signUpPassword.value.match(passwordPattern)){

        signupErrorMsg.style.opacity = '0'

    let findUsername = profiles.find(obj => obj.userN === signupUsername.value)
    let findEmail = profiles.find(obj => obj.email === signupEmail.value)

    if(findEmail && findUsername){
        labelEmail.style.color = 'red'
        labelEmail.textContent = 'This email is used'
        labelSignUpUsername.style.color = 'red'
        labelSignUpUsername.textContent = 'This username is used'
    }else if (findEmail){
        labelSignUpUsername.style.color = 'black'
        labelSignUpUsername.textContent = 'Username'
        labelEmail.style.color = 'red'
        labelEmail.textContent = 'This email is used'
    }else if(findUsername){
        labelEmail.style.color = 'black'
        labelEmail.textContent = 'Email'
        labelSignUpUsername.style.color = 'red'
        labelSignUpUsername.textContent = 'This username is used'
    }else{
        labelEmail.style.color = 'black'
        labelEmail.textContent = 'Email'
        labelSignUpUsername.style.color = 'black'
        labelSignUpUsername.textContent = 'Username'
        profiles.push(new CreateProfile(firstNameInput.value,lastNameInout.value,signupEmail.value,signupUsername.value,signUpPassword.value))

        signupPage.style.opacity = '0'
        setTimeout(()=>signupPage.style.display = 'none',500)
        
        homePage.style.display = 'block';
        setTimeout(()=>homePage.style.opacity = '1',500)

        welcomeMsg.textContent = `Welcome ${firstNameInput.value}`
        firstP.textContent = `Your full name: ${firstNameInput.value} ${lastNameInout.value}`
        secondP.textContent = `Your Email: ${signupEmail.value}`
        thirdP.textContent = `Your username: ${signupUsername.value}`
    }

    console.log(profiles)
}else if(firstNameInput.value.match(firstNamePattern)&&lastNameInout.value.match(lastNamePattern)&&!signupEmail.value.match(emailPattern)&&signupUsername.value.match(usernamePattern)&&signUpPassword.value.match(passwordPattern)){       labelEmail.style.color = 'red'
        labelEmail.textContent = 'This email form is wrong'
        labelSignUpUsername.style.color = 'black'
        labelSignUpUsername.textContent = 'Username'
        signupErrorMsg.style.opacity = '0'
}else if(firstNameInput.value.match(firstNamePattern)&&lastNameInout.value.match(lastNamePattern)&&signupEmail.value.match(emailPattern)&&!signupUsername.value.match(usernamePattern)&&signUpPassword.value.match(passwordPattern)){       
        labelSignUpUsername.style.color = 'red'
        labelSignUpUsername.textContent = 'This username form is wrong'
        labelEmail.style.color = 'black'
        labelEmail.textContent = 'Email'
        signupErrorMsg.style.opacity = '0'
}else if(firstNameInput.value.match(firstNamePattern)&&lastNameInout.value.match(lastNamePattern)&&!signupEmail.value.match(emailPattern)&&!signupUsername.value.match(usernamePattern)&&signUpPassword.value.match(passwordPattern)){       
    labelSignUpUsername.style.color = 'red'
    labelSignUpUsername.textContent = 'This username form is wrong'
    labelEmail.style.color = 'red'
    labelEmail.textContent = 'This email form is wrong'
    signupErrorMsg.style.opacity = '0'
}else{
    signupErrorMsg.style.opacity = '1'
}
})



signOutBtn.addEventListener('click', function(){
    
    firstNameInput.value = '';
    lastNameInout.value = '';
    signupEmail.value = '';
    signupUsername.value = '';
    signUpPassword.value = '';
    loginPassword.value = '';

    homePage.style.opacity = '0'
    setTimeout(()=>homePage.style.display = 'none',500)
    setTimeout(()=>{
        
        loginPage.style.display = 'block'
        setTimeout(()=>loginPage.style.opacity = '1',500)
    },500)
})



// loginPage
// loginUsername
// loginPassword
// labelLoginUsername
// labelLoginPassword
// loginBtn

loginBtn.addEventListener('click', function(){
    let findUsername = profiles.find(obj=>obj.userN === loginUsername.value)

    event.preventDefault();



    if(findUsername?.password === loginPassword.value){
        loginErrorMsg.style.opacity = '0'
        welcomeMsg.textContent = `Welcome back ${findUsername.firstN}`
        firstP.textContent = `Your full name: ${findUsername.firstN} ${findUsername.lastN}`
        secondP.textContent = `Your Email: ${findUsername.email}`
        thirdP.textContent = `Your username: ${findUsername.userN}`        

        loginPage.style.opacity = '0'
        setTimeout(()=>loginPage.style.display = 'none',500)
        
        homePage.style.display = 'block';
        setTimeout(()=>homePage.style.opacity = '1',500)
    }else{
        loginErrorMsg.style.opacity = '1'
    }
})



