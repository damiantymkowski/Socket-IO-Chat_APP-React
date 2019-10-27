const loginButton = document.querySelector('#loginBtn');
const loginSocket = new WebSocket('ws://37.233.99.55:65000/srv');
const errorHandlingText = document.querySelector('.welcomeBox__loginForm--text');

loginButton.addEventListener("click", ()=>{

const loginInput = document.querySelector('#loginNickname').value;
const passwordInput = document.querySelector('#loginPassword').value;

const loginData = {
 "type": "login",
 "name": loginInput,
 "password": passwordInput
}

loginSocket.send(JSON.stringify(loginData));

loginSocket.onmessage = (e) =>{
    const socketResponse = JSON.parse(e.data);
    if(socketResponse.status==3){
    errorHandlingText.textContent = 'User does not exist';
    errorHandlingText.style.color = "red";
    }
};


});
