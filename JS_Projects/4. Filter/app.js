const productsContainerEl = document.querySelector('.products-container')

// 목록에 따른 데이터 보여주기
let filteredProducts = [...products];
// 기존 products.js의 데이터를 유지하기위한 얕은복사를 통한 새로운 객체데이터 생성

// 검색에 따른 데이터 보여주기
const formEl = document.querySelector('.input-form');
const searchInputEl = document.querySelector('.search-input');

formEl.addEventListener('keyup', () => {
  const inputValue = searchInputEl.value;

  filteredProducts = products.filter(product => {
    return product.title.toLocaleLowerCase().includes(inputValue);
  })

  displayProducts();
})

const displayProducts = () => {
  productsContainerEl.innerHTML = filteredProducts.map((product) => {
    const {id, title, image, price} = product;
    return `<article class="product" data-id="${id}">
        <img src="${image}"
          alt="product-img" class="product-img img">
        <div>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </div>
      </article>`
  })

  .join('');
  
}

displayProducts();

const companiesEl = document.querySelector('.companies')

const displayButtons = () => {
  const buttons = [
    // ['all', 'burger king', 'pancake Company', ...]
    'all',
    ...new Set(products.map(product => product.company))
  ]

  companiesEl.innerHTML = buttons
  .map((compnay) => {
    return `<button class="company-btn" data-id="${compnay}">${compnay}</button>`
  })

  .join('');
}

displayButtons();

companiesEl.addEventListener('click', (e) => {
  const el = e.target;
  // console.log(el);
  if(el.classList.contains('company-btn')) {
    if(el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      })
    }

    displayProducts();
  }
})