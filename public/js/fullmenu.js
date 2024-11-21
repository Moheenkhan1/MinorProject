let scrollMenu=document.querySelector('.scroll-menu');

let basket= JSON.parse(localStorage.getItem("data")) || [];

let itemContainer = ``;

       // generating html
let generateShopItems = ()=>{
    
    fullMenuItems.forEach((x)=>{
        let { id, name, price, image ,category} = x;
        let search = basket.find((y) => y.id === id) || [];
        
        itemContainer +=
            `
            <div class="food-card " class="${id}" id="${category}">
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
            </div>`
        ;
    })
    scrollMenu.innerHTML = itemContainer;
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