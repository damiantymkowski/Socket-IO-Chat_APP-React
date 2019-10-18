const urlDataJSON = "https://my-json-server.typicode.com/damiantymkowski/Whatever/db";
let home;
let register;
fetch(urlDataJSON).then(
    function(dataUI) {return dataUI.json();}
)

.then(
    function(json){

        home = json.home[0]["html"];
        register = json.register[0]["html"];
    }
)
.then(json=>{

    const routes = {
        '/' : home,
        '/register' : register
        };
    
    window.onpopstate = () => {
        mainBox.innerHTML = routes[window.location.pathname]
    }
    
    const mainBox = document.querySelector(".welcomeBox__loginForm");
    mainBox.innerHTML = routes[window.location.pathname];
    
    const onNavigate = (pathname) => {
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )
        mainBox.innerHTML = routes[pathname]
        
    }
    const registerButton = document.getElementById('wannaRegisterBtn');

    registerButton.addEventListener("click", ()=> {
        onNavigate('/register')
        const createAccountBtn = document.querySelector('#registerBtn');

        createAccount = () =>{
            const registerURL = 'Whatever_server/adduser.php';
            const nicknameInput = document.querySelector('#loginNickname').value;
            const passwordInput = document.querySelector('#loginPassword').value;
    
            const data = {
                name: nicknameInput,
                password: passwordInput
            };

    fetch(registerURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log("Dodałem użytkownika:");
            console.log(res);
    })
    
    };
    createAccountBtn.addEventListener("click", createAccount);
    });
});