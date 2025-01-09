// User의 정보를 보여주는 JS

import getElemet from "./getElemnet.js";
import removeActive from "./removeActive.js";

const userImage = getElemet('.user-img');
// getElemnt의 user-img class를 인수로 함수 실행하여 반환값을 userImage에 할당
const title = getElemet('.user-title');
const value = getElemet('.user-value')
const btns = [...document.querySelectorAll('.icon')];
// icons class각 요소들을 새로운 객체로 btns에 할당

const displayUser = (person) => {
    userImage.src = person.image;
    // person매개변수로 getElemnet로 받아온 person.image를 userImage.src에 할당함
    value.textContent = person.name;
    title.textContent = 'My name is';
    // 항상 My name is 이니 하드코딩함
    removeActive(btns);
    
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            title.textContent = `My ${label} is`
            value.textContent = person[label];
            removeActive(btns);
            btn.classList.add('active');
        })
    })
}

export default displayUser;