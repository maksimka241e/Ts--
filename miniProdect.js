"use strict";
let Chat = document.querySelector('.Chat');
let pens = document.querySelector('.pens');
const cont = localStorage.getItem('Names') || '';
const inputPen = document.createElement('input');
function createBlocks() {
    const blocks = document.createElement('div');
    blocks.classList.add('pensBlocks');
    const title = document.createElement('h3');
    title.textContent = `Ваш ник: ${cont}`;
    title.classList.add('pensTitles');
    const btn = document.createElement('button');
    btn.textContent = 'Отправить';
    btn.classList.add('pensBtn');
    btn.addEventListener('click', createChatBlocks);
    const btn1 = document.createElement('button');
    btn1.textContent = 'Сменить имя';
    btn1.addEventListener('click', NameCheck);
    btn1.classList.add('pensBtn1');
    inputPen.classList.add('pensInput');
    pens === null || pens === void 0 ? void 0 : pens.appendChild(blocks);
    blocks === null || blocks === void 0 ? void 0 : blocks.appendChild(title);
    blocks === null || blocks === void 0 ? void 0 : blocks.appendChild(inputPen);
    blocks === null || blocks === void 0 ? void 0 : blocks.appendChild(btn);
    blocks === null || blocks === void 0 ? void 0 : blocks.appendChild(btn1);
}
function createChatBlocks() {
    const inputContent = inputPen === null || inputPen === void 0 ? void 0 : inputPen.value;
    function createChatContent(text) {
        DataChat.push(`${text}`);
        setStorageData('textObject', DataChat);
        const cards = `
        <div class="blockChat">
        <p class="blockChatTitle">${cont}</p>
        <p class="blockChatText">${text}</p>
        </div>
        `;
        Chat === null || Chat === void 0 ? void 0 : Chat.insertAdjacentHTML('beforeend', cards);
        ChatCards.push(`${cards}`);
        setStorageData('textContent', ChatCards);
    }
    createChatContent(inputContent);
}
let DataChat = new Array();
let ChatCards = new Array();
let CardsContent = JSON.parse(localStorage.getItem('textContent') || '');
let CardsContentArray = JSON.parse(localStorage.getItem('textContent') || '');
let Chats = document.getElementById('Chat');
function setStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function setChats() {
    if (Chats.childElementCount >= 0) {
        Chats.innerHTML = `${CardsContentArray.join(' ')}`;
    }
}
setChats();
