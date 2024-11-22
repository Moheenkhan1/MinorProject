// nav bar

let dropdown=document.querySelector(".dropdown");
let button=document.querySelector(".btn");

dropdown.addEventListener("click",()=>{
    if(button.style.display==="none"){
        button.style.display="block";
    }else{
        button.style.display="none";
    }
})

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




//js for adding to cart calculation

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.querySelector(".cart-value");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();