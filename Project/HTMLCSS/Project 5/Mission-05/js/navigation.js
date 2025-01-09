import { Menubar } from './Menubar/Menubar.js';
// Menuba class를 이파일에서 사용하겠다

const navigationOpenner = document.querySelector('.button--category');
// button--category class를 navigationOpenner 변수에 할당
// 이 버튼은 메뉴를 열기 위한 트리거 역할
const navigation = document.querySelector('.navigation__list');
// navigation__list class를 navigation 변수에 할당
// 내비게이션 메뉴의 목록을 담고 있는 컨테이너

const menubar = new Menubar(navigation, {
  openner: navigationOpenner,
});
// Menuba class를 활용하여 menuba라는 새 인스턴스를 생성
// 생성자에는 두 개의 인자를 전달
// 첫째 : 내비게이션 리스트를 담고 있는 navigation 요소
// 둘째 : 설정 객체 [설정 객체 내부에는 openner 속성으로 navigationOpenner 요소 전달]
// 메뉴를 열기 위한 버튼 역할

menubar.init();
// init 메서드를 호출하여 메뉴바의 초기화 과정 진행

console.log(menubar);
