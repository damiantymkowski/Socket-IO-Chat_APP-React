const register = `<input type="text" id="loginNickname" placeholder="Nickname" required/>
<input type="password" id="loginPassword" placeholder="Password" required/>
<button id="registerBtn">Create Account</button>
<p class="welcomeBox__loginForm--text">You must first accept our data privacy policy </p>`;

const home = `<input type="text" id="loginNickname" placeholder="Nickname" required/>
<input type="password" id="loginPassword" placeholder="Password" required/>
<button id="loginBtn">Login</button>
<button id="wannaRegisterBtn" onclick="onNavigate('/register'); return false;">I don't have an account yet</button>
<p class="welcomeBox__loginForm--text">You must first accept our data privacy policy </p>`;

const routes = {
'/' : home,
'/register' : register
};

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
window.onpopstate = () => {
    mainBox.innerHTML = routes[window.location.pathname]
  }
const registerButton = document.querySelector("#wannaRegisterBtn");
