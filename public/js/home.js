console.log("helloo");
// js for login page

formContainer = document.querySelector(".form-container");
loginA = document.querySelector(".loginA");
cross = document.querySelector(".cross");
alreadyHaveAccount=document.querySelector(".alreadyyy");

loginA.addEventListener("click", ()=>{
    formContainer.classList.add("show");
})

cross.addEventListener("click", ()=>{
    formContainer.classList.remove("show");
})

alreadyHaveAccount.addEventListener("click",()=>{
    formContainer.classList.add("show");
    formContainer2.classList.remove("show");
    console.log("clicked")
})

// js for sign up page

formContainer2 = document.querySelector(".form-container2");
signUpA = document.querySelector(".signupA");
cross2 = document.querySelector(".cross2");
dontHaveAccount=document.querySelector(".dont");


signUpA.addEventListener("click", ()=>{
    formContainer2.classList.add("show");
})

cross2.addEventListener("click", ()=>{
    formContainer2.classList.remove("show");
})
dontHaveAccount.addEventListener("click",()=>{
    formContainer2.classList.add("show");
    formContainer.classList.remove("show");
    console.log("clicked")
})



//js for scrolling menu

const scrollContainer = document.querySelector(".scroll-items");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    const quoteWidth = document.querySelector(".quote1").offsetWidth;
    const gap = parseInt(getComputedStyle(scrollContainer).gap) || 0; 
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += quoteWidth + gap; 
});

backBtn.addEventListener("click", () => {
    const quoteWidth = document.querySelector(".quote1").offsetWidth;
    const gap = parseInt(getComputedStyle(scrollContainer).gap) || 0; 
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= quoteWidth + gap; 
});
/*
getComputedStyle(scrollContainer) retrives all the styles applied to the scroll container. .gap property returns the value of the gap property. If the gap property is not set, it returns 0.
the parseInt () function converts the string returned by getComputedStyle() to an integer. The || 0 is a default value in case the gap property is not set.
the || provides a fallback value If parseInt results in NaN (e.g., if the gap property is not set or invalid), the value defaults to 0.
*/




//js for adding to cart in scrollable Menu

/*let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.querySelector(".cart-value");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();*/

// let itemContainer = ``;
//        // generating html
// let generateShopItems = ()=>{
    
//         completeItems.cartItems.forEach((x)=>{
//         let { id, name, price, image } = x;
//         let search = basket.find((y) => y.id === id) || [];
        
//         itemContainer +=
//           `
//         <div id=product-id-${id} class="square">
//             <div class="square-img">
//                 <img src="${image}">
//             </div>
//         <h2 class="square-heading">${name}</h2>
//             <p class="price-combo">Rs: ${price}/- </p>
//         <button class="square-button">Add To Cart</button>
//         <div class="quantityButtons">
//         <i onclick="decrement(${id})" class="fa-solid fa-minus downQ"></i>
//         <div id=${id} class="quantity">${
//             search.item === undefined ? 0 : search.item
//           }</div>
//         <i onclick="increment(${id})" class="fa-solid fa-plus upQ"></i>
//         </div>
//         </div>
//         ` ;
          
//     })
//     shopp.innerHTML = itemContainer;

// }
// generateShopItems();


//        //function for increasing quantity
// let increment = (id) => {
//     let selectedItem = id;
//     let search = basket.find((x) => x.id === selectedItem.id);
  
//     if (search === undefined) {
//       basket.push({
//         id: selectedItem.id,
//         item: 1,
//       });
//     } else {
//       search.item += 1;
//     }
//     update(selectedItem.id);
//     localStorage.setItem("data", JSON.stringify(basket));
//   };
//         //function for decreasing quantity
//   let decrement = (id) => {
//     let selectedItem = id;
//     let search = basket.find((x) => x.id === selectedItem.id);
  
//     if (search === undefined) return;
//     else if (search.item === 0) return;
//     else {
//       search.item -= 1;
//     }
  
//     update(selectedItem.id);
//     basket = basket.filter((x) => x.item !== 0);
//     console.log(basket);
//     localStorage.setItem("data", JSON.stringify(basket));
//   };
//        //function for updating quantity in the div
//   let update = (id) => {
//     let search = basket.find((x) => x.id === id);
//     document.getElementById(id).innerHTML = search.item;
//     calculation();
//   };
//       //function for calculating total number of items added in cart
//   let calculation = () => {
//     let cartIcon = document.querySelector(".cart-value");
//     cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
//   };
  
//   calculation();