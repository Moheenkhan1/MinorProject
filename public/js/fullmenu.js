let scrollMenuPizza=document.querySelector('.s-m-pizzas');
let scrollMenuBurger=document.querySelector('.s-m-burger');
let scrollMenuSandwich=document.querySelector('.s-m-sandwich');
let scrollMenuRolls=document.querySelector('.s-m-rolls');
let scrollMenuStarters=document.querySelector('.s-m-starters');
let scrollMenuWraps=document.querySelector('.s-m-wraps');
let scrollMenuSls=document.querySelector('.s-m-sls');
let scrollMenuDrinks=document.querySelector('.s-m-drinks');

let basket= JSON.parse(localStorage.getItem("data")) || [];

let itemPizzaContainer = '';
let itemBurgerContainer = '';
let itemSandwichContainer = '';
let itemRollsContainer = '';
let itemStarterContainer = '';
let itemWrapsContainer = '';
let itemSlsContainer = '';
let itemDrinksContainer = '';


       // generating html
let generateShopItems = ()=>{
    
    completeItems.fullMenuPizza.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemPizzaContainer += `
            <div class="food-card " class="${id}">
                <div class="food-image pizza-image">
                <img src="${image}">
                </div>
                <div class="food-info">
                    <h2>${name}</h2>
                    <h2>Rs ${price}/-</h2>
                    <button>Add to Cart</button>
                    <div class="quantityButtons">
                       <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
                       <div id=${id} class="quantity">${
                         search.item === undefined ? 0 : search.item}
                        </div>
                       <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
                    </div>
                </div>
            </div>`;
    })
    scrollMenuPizza.innerHTML = itemPizzaContainer;

    completeItems.fullMenuBurger.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemBurgerContainer += `
            <div class="food-card " class="${id}">
                <div class="food-image">
                <img src="${image}">
                </div>
                <div class="food-info">
                    <h2>${name}</h2>
                    <h2>Rs ${price}/-</h2>
                    <button>Add to Cart</button>
                    <div class="quantityButtons">
                       <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
                       <div id=${id} class="quantity">${
                         search.item === undefined ? 0 : search.item}
                        </div>
                       <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
                    </div>
                </div>
            </div>`;
    })
    scrollMenuBurger.innerHTML = itemBurgerContainer;

    completeItems.fullMenuSandwich.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemSandwichContainer += `
            <div class="food-card " class="${id}">
                <div class="food-image">
                <img src="${image}">
                </div>
                <div class="food-info">
                    <h2>${name}</h2>
                    <h2>Rs ${price}/-</h2>
                    <button>Add to Cart</button>
                    <div class="quantityButtons">
                       <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
                       <div id=${id} class="quantity">${
                         search.item === undefined ? 0 : search.item}
                        </div>
                       <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
                    </div>
                </div>
            </div>`;
    })
    scrollMenuSandwich.innerHTML = itemSandwichContainer;


    completeItems.fullMenuRolls.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemRollsContainer += `
            <div class="food-card " class="${id}">
                <div class="food-image">
                <img src="${image}">
                </div>
                <div class="food-info">
                    <h2>${name}</h2>
                    <h2>Rs ${price}/-</h2>
                    <button>Add to Cart</button>
                    <div class="quantityButtons">
                       <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
                       <div id=${id} class="quantity">${
                         search.item === undefined ? 0 : search.item}
                        </div>
                       <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
                    </div>
                </div>
            </div>`;
    })
    scrollMenuRolls.innerHTML = itemRollsContainer;

    completeItems.fullMenuStarters.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemStarterContainer += `
            <div class="food-card " class="${id}">
                <div class="food-image">
                <img src="${image}">
                </div>
                <div class="food-info">
                    <h2>${name}</h2>
                    <h2>Rs ${price}/-</h2>
                    <button>Add to Cart</button>
                    <div class="quantityButtons">
                       <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
                       <div id=${id} class="quantity">${
                         search.item === undefined ? 0 : search.item}
                        </div>
                       <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
                    </div>
                </div>
            </div>`;
    })
    scrollMenuStarters.innerHTML = itemStarterContainer;

    completeItems.fullMenuWraps.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemWrapsContainer += `
            <div class="food-card " class="${id}">
                <div class="food-image">
                <img src="${image}">
                </div>
                <div class="food-info">
                    <h2>${name}</h2>
                    <h2>Rs ${price}/-</h2>
                    <button>Add to Cart</button>
                    <div class="quantityButtons">
                       <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
                       <div id=${id} class="quantity">${
                         search.item === undefined ? 0 : search.item}
                        </div>
                       <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
                    </div>
                </div>
            </div>`;
    })
    scrollMenuWraps.innerHTML = itemWrapsContainer;

    completeItems.fullMenuSLS.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemSlsContainer += `
            <div class="food-card " class="${id}">
                <div class="food-image">
                <img src="${image}">
                </div>
                <div class="food-info">
                    <h2>${name}</h2>
                    <h2>Rs ${price}/-</h2>
                    <button>Add to Cart</button>
                    <div class="quantityButtons">
                       <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
                       <div id=${id} class="quantity">${
                         search.item === undefined ? 0 : search.item}
                        </div>
                       <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
                    </div>
                </div>
            </div>`;
    })
    scrollMenuSls.innerHTML = itemSlsContainer;

    completeItems.fullMenuDrinks.forEach((x)=>{
        let { id, name, price, image } = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemDrinksContainer += `
            <div class="food-card " class="${id}">
                <div class="food-image">
                <img src="${image}">
                </div>
                <div class="food-info">
                    <h2>${name}</h2>
                    <h2>Rs ${price}/-</h2>
                    <button>Add to Cart</button>
                    <div class="quantityButtons">
                       <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
                       <div id=${id} class="quantity">${
                         search.item === undefined ? 0 : search.item}
                        </div>
                       <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
                    </div>
                </div>
            </div>`;
    })
    scrollMenuDrinks.innerHTML = itemDrinksContainer;



}
generateShopItems();

   //function for increasing quantity
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
      
    if (search === undefined) {
        basket.push({
        id: selectedItem.id,
        item: 1,
    });
    } else {
        search.item += 1;
    }
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};


         //function for decreasing quantity
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
      
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
      
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket));
};


    //function for updating quantity in the div
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};


    //function for calculating total number of items added in cart
let calculation = () => {
    let cartIcon = document.querySelector(".cart-value");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
      
calculation();