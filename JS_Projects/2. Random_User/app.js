import displayUser from "./utils/displayUser.js";
import getUser from "./utils/fetchUser.js";
import getElemnet from "./utils/getElemnet.js";
// fetchUser.js에서 받아옴

const btn = getElemnet('.btn');

const showUser = async () => {
    const person = await getUser();
    // getUser()의 데이터를 person 객체 데이터로 할당

    displayUser(person);
    // displayUser 함수에 person을 인수로 실행
}

// getUser();

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)