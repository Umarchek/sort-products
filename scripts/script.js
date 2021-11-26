const listGoods = [{
        name: 'Laptop Apple MacBook Air 13 i5 1.8/8Gb/128SSD',
        cost: 996,
        rated: 4.8,
        img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop1.jpg?raw=true'
    },
    {
        name: 'Laptop Lenovo IdeaPad 330-15IKB',
        cost: 536,
        rated: 4.6,
        img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop3.jpg?raw=true'
    },
    {
        name: 'Laptop Apple MacBook Pro 13 i5 2.3/8/128Gb SG',
        cost: 1533,
        rated: 4.5,
        img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop2.jpg?raw=true'
    },
    {
        name: 'Laptop HP Pavilion 13-an0072ur 5WC37EA',
        cost: 705,
        rated: 4.1,
        img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop4.jpg?raw=true'
    },
    {
        name: 'Laptop Acer Nitro 5 AN515-42-R0HW NH.Q3RER.006',
        cost: 919,
        rated: 3.9,
        img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop5.jpg?raw=true'
    },
    {
        name: 'Laptop ASUS F540MB-GQ102T',
        cost: 383,
        rated: 3.8,
        img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop6.jpg?raw=true'
    },
    {
        name: 'Laptop Apple MacBook Pro 13 i5 2.3/8/256Gb SG',
        cost: 1763,
        rated: 3.5,
        img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop7.jpg?raw=true'
    },
    {
        name: 'Laptop Acer Swift 3 SF314-54-35YY NX.GYGER.007',
        cost: 674,
        rated: 3.4,
        img: 'https://github.com/egormolchanov/sort-goods/blob/master/image/laptop8.jpg?raw=true'
    }
];

const dropDownList = document.querySelector('.drop-down-list'),
    dropSownListOption = document.querySelectorAll('.drop-down-list__option'),
    showcaseGoods = document.querySelector('.showcase-goods');


const addGoods = () => {
    showcaseGoods.innerHTML = '';
    listGoods.forEach(el => {
        showcaseGoods.innerHTML +=
            `<div class="goods">
                <img src="${el.img}" alt="">
                <h3 class="goods-text">${el.name}</h3>
                <p class="goods-text">${el.cost} USD</p>
            </div>`
    })

    noResults.classList.add('hide');
}

addGoods();

//drop down list
const dropDown = () => {
    const dropDownListOptions = document.querySelector('.drop-down-list__options'),
        arrowButton = document.querySelector('.arrow-button');
    dropDownListOptions.classList.toggle('hide');
    arrowButton.classList.toggle('arrow-bottom');
    arrowButton.classList.toggle('arrow-top');
}

//sorting goods
const sortGoods = event => {
    listGoods.sort((a, b) => {
        switch (event.target.innerHTML) {
            case 'Price (high-low)':
                return b.cost - a.cost;
            case 'Price (low-high)':
                return a.cost - b.cost;
            case 'Top Rated':
                return b.rated - a.rated;
        }
    });

    addGoods();
}

dropDownList.addEventListener('click', dropDown);
dropSownListOption.forEach(el => el.addEventListener('click', sortGoods));

//search
search.oninput = () => {
    const value = search.value.trim().toLowerCase(),
        headlineGoods = document.querySelectorAll('.goods h3');

    switch (value) {
        case '':
            headlineGoods.forEach(el => {
                el.parentNode.classList.remove('hide');
            });
            break;
        default:
            headlineGoods.forEach(el => {
                el.innerText.toLowerCase().search(value) == -1 ? el.parentNode.classList.add('hide') : el.parentNode.classList.remove('hide');
            });
            break;
    }

    //check if search results are left
    const resultСheck = Array.from(document.querySelectorAll('.goods')).every(el => el.classList.contains('hide'));

    if (resultСheck) {
        if (noResults.classList.contains('hide')) {
            noResults.classList.remove('hide');
        }
    } else if (!noResults.classList.contains('hide')) {
        noResults.classList.add('hide');
    }
}