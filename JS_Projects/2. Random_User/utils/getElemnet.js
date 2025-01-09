// 요소를 가져오는 JS

// 요소를 가져오는 것을 모듈화 해서 편리하게 작업
const getElemnet = (selection) => {
    const element = document.querySelector(selection)
    if(element) return element;
    throw new Error('없는 요소 입니다.');
}

export default getElemnet;
// 모듈화된 getElement를 내보낸다(export) 기본값으로(default)
// import b from './getElemnet';
// getElemnet요소를 b에 저장한다.

// 기본(default)를 쓰지 않고 내보내면
// export const a = 'a';
// import {a} from './getElement';
// 요소에 {}를 붙여야 하는 번거러움이 있으며
// export한 a만 가져올 수 있다.
