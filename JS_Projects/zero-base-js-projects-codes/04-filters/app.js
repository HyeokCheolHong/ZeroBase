const productsContainerEl =
    document.querySelector('.products-container');

let filteredProducts = [...products];


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
        const { id, title, image, price } = product;
        return `<article class="product" data-id="${id}">
        <img
          src="${image}"
          class="product-img img"
          alt="product-img"
        />
        <div>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </div>
      </article>`
    })
        .join('');
}

displayProducts();


const companiesEl = document.querySelector('.companies');

const displayButtons = () => {
    const buttons = [
        'all',
        ...new Set(products.map(product =>
            product.company))
    ]

    console.log(buttons);

    companiesEl.innerHTML = buttons
        .map((company) => {
            return `
        <button class="company-btn" data-id="${company}">${company}</button>
        `
        })
        .join('');

}

displayButtons();


companiesEl.addEventListener('click', (e) => {
    const el = e.target;
    console.log(el);
    if (el.classList.contains('company-btn')) {
        if (el.dataset.id === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter((product) => {
                return product.company === el.dataset.id;
            })
        }
        searchInputEl.value = '';

        displayProducts();
    }
})