export class UI {

  addProduct(product) {
    const productList = document.getElementById('product-list');
    const elemnet = document.createElement('div');

    elemnet.innerHTML = `
      <div class="u-full-width">
        <div>
          <strong>상품 이름</strong>: ${product.name} -
          <strong>상품 가격</strong>: ${product.price} -
          <strong>상품 연도</strong>: ${product.year} -
          <a href="#" name="delete">X</a>
        </div>
      </div>
    `

    productList.appendChild(elemnet);
  }

  showMessage(message, cssClass) {
    const div = document.createElement('div');
    // 문서 가상 요소div를 생성
    div.className = `alert ${cssClass}`;
    // div className에 `alert cssClass(매개변수) 할당
    div.appendChild(document.createTextNode(message));
    // div의 부모요소에 Text(message)를 추가

    const container = document.querySelector(".container");
    const form = document.querySelector('#product-form');

    container.insertBefore(div, form);
    // container요소 form앞에 div를 추가

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  resetForm() {
    document.getElementById('product-form').reset();
  }

  deleteProduct(elemnet) {
    if(elemnet.name === 'delete') {
      elemnet.parentElement.parentElement.remove();
      this.showMessage("제품이 성공적으로 삭제되었습니다.", "success")
    }
  }
}