const socket = io();

const userList = document.querySelector(".usersList");
const inputMessage = document.querySelector(".inputMessage");
const formChat = document.querySelector(".formChat");
const messagehistory = document.querySelector(".messagehistory");
const typingUser = document.querySelector(".typingUser");

let userName = "";

const newUserConn = (user) => {
    userName = user || `Usuario${Math.floor(Math.random() * 1000)}`;
    socket.emit("newUser", userName);
    addUser(userName);
}
const addUser = (userName) => {
    if(!!document.querySelector(`.${userName}-userlist`)){
        return;
    }
    const userData = `
        <li class="clearfix">
            <div class="about ${userName}-userlist">
                <div class="name">${userName}</div>
            </div>
        </li>
    `;

    userList.innerHTML+= userData;
}

// emitir evento e inicializa userName
newUserConn();

const addMessages = ({ user, message }) => {
    const d = new Date();
    const tMessage = d.toLocaleString("en-us", {hour: "numeric", minute: "numeric"});

    const rMessage= `
        <ul class="m-b-0">
            <li class="clearfix">
            <span class="message-data-time">${user}--${tMessage}</span>
            </li>
            <div class="message other-message">${message}</div>
        </ul>
    `;
    const mMessage=`
    <ul class="m-b-0">
        <li class="clearfix">
        <span class="message-data-time">${tMessage}</span>
        </li>
        <div class="message my-message float-right">${message}</div>
    </ul>
    `;
    messagehistory.innerHTML += user === userName ? mMessage : rMessage; //mira si es el usuario actual
}

formChat.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!inputMessage.value){
        return;
    }
    socket.emit("chat", {
        message: inputMessage.value,
        nickName: userName
    });
});

inputMessage.addEventListener("keyup",()=>{
    socket.emit("typing", {
        isTyping: inputMessage.value.length > 0,
        nickName: userName
    });
});

socket.on("newUser", (data) => {
    data.map((user) => addUser(user));
});
socket.on("userDisconnected", (userName) => {
    document.querySelector(`.${userName}-userlist`).remove();
});
socket.on("chat",(data) => {
    addMessages({user: data.nickName, message: data.message});
});
socket.on("typing", (data) => {
    const {isTyping, nickName} = data;
    if(!isTyping){
        typingUser.innerHTML = "";
        return;
    }
    typingUser.innerHTML= `<span>
    ${nickName} is typing...
    </span>`
})