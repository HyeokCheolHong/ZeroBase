// DOM(Document Object Model)이란, HTML 문서를 객체로 표현한 것으로,
// JS에서 HTML을 제어할 수 있게 해줍니다.

// 노드(Node) - 요소, 텍스트, 주석 등의 각 구조를 의미합니다.
// 요소(Element) - 노드의 하위 객체로 요소를 의미합니다.
const parentEl = document.querySelector('.parent')
// .(클래스 선택자) 
// 변수 parentEl에 현재문서에서 parent class를 할당

// 요소의 모든 자식 노드를 확인합니다.
console.log(parentEl.childNodes)
// NodeList(11) [text, comment, text, div#c1.child, text, div.child, text, div.child, text, comment, text]
// NodeList : 유사 배열

// 요소의 모든 자식 요소를 확인합니다.
console.log(parentEl.children)
// HTMLCollection(3) [div#c1.child, div.child, div.child, c1: div#c1.child]