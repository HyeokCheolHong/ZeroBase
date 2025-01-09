// Book Constructor function
function Book(title, author) {
  // Constructor 는 함수를 대문자로 정의
  this.title = title;
  this.author = author;

}

// const book1 = new Book('1', 'John');
  // Book 함수의 인자로 '1'과 'John'을 넣는다.
// book1.title === '1';
// book1.author === 'John';

// UI Constructor function
function UI() {

}

const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');

const bookSubmitEl = document.getElementById('book-form');
// bookSubmitEl에 문서에 book-form아이디를 받아 할당한다
bookSubmitEl.addEventListener('submit', (e) => {
// bookSubmitEl이 submit 이벤트가 발생시
  
  e.preventDefault();
  // submit 했을경우 Page Refresh되는것을 방지하기위함


  const title = titleEl.value;
  // title에 titleEl값(id)를 할당한다
  const author = authorEl.value;

  const book = new Book(title, author);
  // Book()함수의 인스턴스객체인 book 생성

  const ui = new UI();

  // 책이름과 책저자가 모두 적혀있음을 판단하는 유효성 체크
  if(title === '' || author === '') {
    console.log('error');
    ui.showAlert('모든 필드를 채워주세요!', 'error');
  } else {
    // 책을 리스트에 추가
    ui.addBookToList(book);

    // 성공 메시지를 보여주기
    ui.showAlert('책이 추가되었습니다.!', 'success');

    // 필드들을 초기화
    ui.clearFields();
  }


})

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');
  // 문서에 'tr'요소를 생성하여 row에 할당함(생성만 하였지 출력은 하지않음)
  
  // <tr>
  //   <td>책 이름</td>
  //   <td>책 저자</td>
  // </tr>
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><a href="#" class="delete">X</a></td>
    `
  list.appendChild(row);
  // list(부모)에 자식요소(row)를 더한다
}

UI.prototype.clearFields = function() {
  titleEl.value = '';
  authorEl.value = '';
}

// 제출이 성공적으로 끝나면 표기
UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');

  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  // <div class="alert success">
  //   성공했습니다.
  // </div>

  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form');

  container.insertBefore(div, form);
  // container에서 form앞에 div(message)를 넣는다

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
  // 제출로인해 생긴 div를 3초지나면 삭제함
}

const bookList = document.getElementById('book-list');
bookList.addEventListener('click', (e) => {
  const ui = new UI();

  ui.deleteBook(e.target);
  // target : X표시임

  ui.showAlert('책이 지워졌습니다.', 'success');
})

UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    // 그 target의 className이 delete라면
    target.parentElement.parentElement.remove();
    // 그 target의 부모와 부모의부모 요소를 삭제해라
  }
}