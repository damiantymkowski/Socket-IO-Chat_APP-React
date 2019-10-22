const contentBox = document.querySelector(".welcomeBox__loginForm");
import { homePage } from './pages/home.js'
import { registerPage } from './pages/register.js'
import { userRegister } from './auth.js'

const routes = {
    '/' : homePage,
    '/register' : registerPage
}

contentBox.innterHTML = routes[window.location.pathname];

window.onpopstate = () =>{
    contentBox.innerHTML = routes[window.location.pathname];
    registerViewLoad();
}


const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    contentBox.innerHTML = routes[pathname];
}

const registerViewLoad = () => {
const button = document.querySelector('#wannaRegisterBtn');

button.addEventListener("click", ()=> {
    onNavigate('/register');
    userRegister();
});
}

registerViewLoad();



