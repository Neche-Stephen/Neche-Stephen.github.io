let Name = document.getElementById('name')
let email = document.getElementById('email');
let password = document.getElementById('password')
let initialDeposit = document.getElementById('deposit');
console.log(sessionStorage)

let signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    email = email.value
    Name = Name.value
    password = password.value
    initialDeposit = initialDeposit.value;

    let userDetails = {
        userName : Name,
        userEmail : email,
        userPassword :  password,
        acctBalance : initialDeposit
    }
    userDetails = JSON.stringify(userDetails) //convert userDetails object to a string
    localStorage.setItem(email, userDetails);
    sessionStorage.setItem('userName', Name);
    sessionStorage.setItem('acctBalance', initialDeposit)
    sessionStorage.setItem('email', email);
    
    console.log(localStorage);
    alert('successful')
    location.href = './dashboard.html'

    
    
})