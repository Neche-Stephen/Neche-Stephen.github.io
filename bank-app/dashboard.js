console.log(sessionStorage);
//Fetching the users name and account balance
const userName = sessionStorage.getItem('userName');
let acctBalance = sessionStorage.getItem('acctBalance');
let email =  sessionStorage.getItem('email');
let userDetails;

let userIntro = document.getElementById('userIntro');
let userAcctBalanceSpan = document.getElementById('acctBalance');

userIntro.innerHTML +=  userName;
userAcctBalanceSpan.innerHTML = `# ${acctBalance}`

let withdrawInput = document.getElementById('withdraw');
let depositInput = document.getElementById('deposit');

let withdrawInputValue;
let depositInputValue;

const showWithdrawInput = () =>{
    withdrawInput.style.display = 'block'
}

const showDepositInput = () =>{
    depositInput.style.display = 'block'
}

const withdraw = () =>{
    withdrawInputValue = withdrawInput.value;
    acctBalance = acctBalance - withdrawInputValue;
    updateUserDetails(acctBalance);
    alert(`Withdrawal successful, Your account balance is now ${acctBalance}`)
    withdrawInput.style.display = 'none'
}

const deposit = () =>{
    depositInputValue = depositInput.value;
    acctBalance = acctBalance + parseFloat(depositInputValue);
    updateUserDetails(acctBalance);
    alert(`Deposit successful, Your account balance is now ${acctBalance}`)
    depositInput.style.display = 'none'
}

const updateUserDetails = (acctBalance)=>{
    sessionStorage.setItem('acctBalance', acctBalance )
    userAcctBalanceSpan.innerHTML = `# ${acctBalance}`

    userDetails = localStorage.getItem(email);
    userDetails = JSON.parse(userDetails) //converting userDetails to an object

    userDetails.acctBalance = acctBalance;
    userDetails = JSON.stringify(userDetails); //converting userDetails to an strings
    localStorage.setItem(email, userDetails)
    
}
