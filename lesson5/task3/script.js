function Item(product, image, description, price, discount = 0) {
    this.product = product;
    this.image = `img/${image}.png`;
    this.description = description;
    this.price = price;
    this.discount = discount
}

let catalogList = [];

catalogList.push(
    new Item('LLoyd', 'Image1', 'Make a BIG impression', 95, 20)
);
catalogList.push(
    new Item('Djay', 'Image2', 'Has a removable, fabric robe', 17)
);
catalogList.push(
    new Item('Zein', 'Image3', 'Individual sets of building', 15)
);
catalogList.push(
    new Item('Kai', 'Image4', 'Components are dropped', 32, 10)
);
catalogList.push(
    new Item('Master Voo', 'Image5', 'models carry brick-built', 22)
);
catalogList.push(
    new Item('Mech', 'Image6', 'The perfect building toys for kids', 22)
);


const catalog = document.querySelector('#catalog');

function drowItem(catalogList) {
    for (const iterator of catalogList) {
        catalog.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
            <div class="item">
                <div class="image"><img src="${iterator.image}"></div>
                <div class="description"><h4>${iterator.product}</h4>${iterator.description}
                    <div class="price">Цена: 
                        <span>${iterator.price}</span>
                    </div>
                </div>
            </div>
            <div class="sale">
                <span class='offer ${iterator.discount > 0 ? 'show' : ''}'>Скидка: ${iterator.discount}%</span>
                <a href="#">В корзину</a>
            </div>
        </div>`);
    }
}

drowItem(catalogList);