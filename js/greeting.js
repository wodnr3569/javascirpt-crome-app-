const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//로그인 버튼 눌렀을때 input안의 내용을 가져오는 함수
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

//h1을 출려하는 함수
function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

//로컬 스토리지에 usernaem이 있는지를 확인하고 그에따른 진행
if(savedUsername === null){
    //form을 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    //h1을 보여줌
    paintGreeting(savedUsername);
}
