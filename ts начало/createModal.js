"use strict";
const pen = document.createElement('input');
const blocksModal = document.querySelector('.blocksModal');
const regProf = document.querySelector('.regProf');
// check
function CheckPen() {
    if (pen.value !== '') {
        blocksModal === null || blocksModal === void 0 ? void 0 : blocksModal.classList.add('active');
    }
}
// check Content Name
setInterval(openCheck, 10);
setTimeout(openChat, 10);
setInterval(openCheck1, 10);
function openChat() {
    createBlocks();
}
function openCheck() {
    if (localStorage.getItem('Names') != '') {
        blocksModal === null || blocksModal === void 0 ? void 0 : blocksModal.classList.add('active');
    }
}
function openCheck1() {
    if (localStorage.getItem('Names') == null || localStorage.getItem('Names') == '') {
        blocksModal === null || blocksModal === void 0 ? void 0 : blocksModal.classList.remove('active');
    }
}
// type
pen.placeholder = "Ваш никнейм";
// create content
function createContentModal() {
    const title = document.createElement('h3');
    title.textContent = 'Напишите имя, чтобы писать!';
    const btn = document.createElement('button');
    btn.textContent = 'Написать';
    btn.addEventListener('click', RunCheck);
    blocksModal === null || blocksModal === void 0 ? void 0 : blocksModal.appendChild(title);
    blocksModal === null || blocksModal === void 0 ? void 0 : blocksModal.appendChild(btn);
}
function RunCheck() {
    const blocks1 = document.createElement('div');
    blocks1.classList.add('bloks1');
    const btnCheck = document.createElement('button');
    btnCheck.textContent = 'Сохранить';
    btnCheck.addEventListener('click', contentBlock);
    regProf === null || regProf === void 0 ? void 0 : regProf.appendChild(blocks1);
    blocks1 === null || blocks1 === void 0 ? void 0 : blocks1.appendChild(pen);
    blocks1 === null || blocks1 === void 0 ? void 0 : blocks1.appendChild(btnCheck);
}
function contentBlock() {
    const pens = pen === null || pen === void 0 ? void 0 : pen.value;
    function NamesBLocksRun(text) {
        localStorage.setItem('Names', text);
        regProf === null || regProf === void 0 ? void 0 : regProf.classList.add('active');
        CheckPen();
        location.reload();
    }
    NamesBLocksRun(pens);
}
createContentModal();
