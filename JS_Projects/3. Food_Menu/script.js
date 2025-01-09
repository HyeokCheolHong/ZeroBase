const menu = [
  {
      id: 1,
      title: "pancakes",
      category: "breakfast",
      price: 3000,
      img: "./images/item-1.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 2,
      title: "diner",
      category: "lunch",
      price: 1000,
      img: "./images/item-2.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 3,
      title: "milkshake",
      category: "shakes",
      price: 2000,
      img: "./images/item-3.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 8000,
      img: "./images/item-4.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 3000,
      img: "./images/item-5.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 7000,
      img: "./images/item-6.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 7,
      title: "bacon overflow",
      category: "breakfirst",
      price: 3000,
      img: "./images/item-7.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 8, 
      title: "american classic",
      category: "lunch",
      price: 4000,
      img: "./images/item-8.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 9,
      title: "quaratine buddy",
      category: "shakes",
      price: 1000,
      img: "./images/item-9.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
  {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 2000,
      img: "./images/item-10.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus reprehenderit quam, perferendis non sapiente vel maxime! Suscipit exercitationem nulla rerum, aspernatur culpa porro, tempore officia blanditiis, qui explicabo possimus?`
  },
];

window.addEventListener('DOMContentLoaded', () => {
    // page가 load 되었을 때
    displayMenuButtons();
    displayMenuItems(menu);

})

// 버튼의 리스너 함수 등록
const sectionCenterEl = document.querySelector(".section-center");
const btnContainerEl = document.querySelector(".btn-container");

// 버튼도 동적처리로 생성
function displayMenuButtons() {
    // reduce 총가격 1000 + 2000 + 3000 => reduce메소드는 총가격 구할때 주로 사용됨
    // [''] 누적할때 사용
    const categories = menu.reduce((acc, curr) => {
        if(!acc.includes(curr.category)) {
            // curr.category를 acc에 포함하지 않는다면!
            // 같은 내용의 category는 중복하여 추가하지 않도록 함
            acc.push(curr.category);
        }
        return acc;
        // 순회를 하면서 category를 추가함
    }, ['all'])
    // 시작은 all 배열 하나만 추가하고 나머지 카테고리는 이후에 추가
    // ['all', 'dinner', 'shakes', ...]

    const categoryBtns = categories
    .map((category) => {
        return `<button type="button" class="filter-btn" data-id="${category}">
        ${category}
        </button>`
    })
    // .map() 메소드는 배열을 순회함
    .join("");
    // <button type="button" class="filter-btn" data-id="all"> all </button>
    // <button type="button" class="filter-btn" data-id="breakfast"> breakfast </button>
    // ...

    btnContainerEl.innerHTML = categoryBtns;
    // HTML에 btnContainerEl 객체에 categoryBtns를 추가함

    const filtersBtns = btnContainerEl.querySelectorAll(".filter-btn");

    filtersBtns.forEach((btn) => {
        // filterBtns를 순회하면서 btn 매개변수를 넣는다.
        btn.addEventListener('click', (e) => {
            // 해당 매개변수(버튼)이 클릭될때
            const category = e.currentTarget.dataset.id;
            // 해당 버튼의 id를 category에 할당한다
            console.log(category)

            const menuCategory = menu.filter((menuItem) => {
                if(menuItem.category === category) {
                    return menuItem;
                }
            })
            if(category === 'all') {
                // 함수로 동작을 구성
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        })
    })
}

// 각버튼(category)를 눌렀을때 동작하는 함수를 생성
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
          <div class="header">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`
    })
    displayMenu = displayMenu.join("");
    sectionCenterEl.innerHTML = displayMenu;
}