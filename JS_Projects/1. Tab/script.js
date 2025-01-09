const about = document.querySelector('.about');
// 사진 아래있는 글 박스
const  btns = document.querySelectorAll('.tab-btn');
// 글 박스내부 btn
const articles = document.querySelectorAll('.content');
// 글 박스 내부 Lorem 부분

about.addEventListener("click", (e) => {
    // about 변수를 클릭 했을때 콜백함수 e(이벤트)를 실행한다
    // console.log(e.target.dataset.id)
    // about class내 data-id를 콘솔로그로 출력한다
    
    const id = e.target.dataset.id;
    // about class내 data-id를 변수 id에 할당한다
    if (id) {
        // id가 있을 경우만

        // 버튼의 active 클래스
        btns.forEach((btn) => {
            // btns에서 forEach반복동작을 시작
            btn.classList.remove("active");
            // 매개변수 btn의 active class 를 제거한다.(즉 모든 btns의 active클래스를 제거함)
        })

        e.target.classList.add("active");
        // event가 발생한 대상(즉 클릭이 된 대상)에만 active class를 추가함
        
        // 글귀(content class)의 articles
        articles.forEach((article) => {
            article.classList.remove("active");
        })

        const element = document.getElementById(id);
        // event가 발생한 대상에 id를 변수 element에 할당
        element.classList.add("active");
        // 할당받은 id에 class "active"추가
    }
})