let cartProductDiv = document.querySelector(".main-cart-box");
let cartSummary = document.querySelector(".cart-summary");
let updateIncrement=document.getElementById("updationKeyIncrement");
let updateDecrement=document.getElementById("updationKeysDecrement");



let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.querySelector(".cart-value");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();

  let generateCartItems = () => {
    if (basket.length !== 0) {
      return (cartProductDiv.innerHTML = basket
        .map((x) => {
            let { id, item } = x;
            let search = fullMenuItems.find((x) => x.id === id) || [];
            let { name,price,image } = search;

            return `
            <div class="cart-box">
            <div class="cart-image">
            <img src="${image}" alt="">
            </div>
            <div class="cart-info">
            <i onclick="removeItem(${id})" class="fa-regular fa-circle-xmark"></i>
            <p class="cart-product-name">${name}</p>
            <p class="cart-product-prize">Rs ${price} /-</p>
            <div class="cart-product-quantity">
            <h2>PRICE:Rs ${item * price}/-</h2>
            <div class="quantity-buttons">
            <i onclick="decrement(${id})" class="fa-solid fa-minus" id="dec"></i>
            <div id="${id}">${item}</div>
            <i onclick="increment(${id})" class="fa-solid fa-plus" id="inc"></i>
            </div>
            </div>
            </div>
            
            </div>
            `
          
          
        })
        .join(""));
      } else {
        //   ShoppingCart.innerHTML = "";
        cartProductDiv.innerHTML = `
        <h2 id="empty">Cart is Empty</h2>
        <a href="/">
        <button class="HomeBtn">Back to Home</button>
        </a>
        `;
        cartSummary.classList.add("removeCartSummary");
      }
    };
    generateCartItems();
    
    let increment = (id) => {
      console.log("increment");
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
    
      generateCartItems();
      update(selectedItem.id);
      localStorage.setItem("data", JSON.stringify(basket));
    };
    
    
    
    let decrement = (id) => {
      console.log("decrement");
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
      if (search === undefined) return;
      else if (search.item === 0) return;
      else {
        search.item -= 1;
      }
    
      update(selectedItem.id);
      basket = basket.filter((x) => x.item !== 0);
      generateCartItems();
      localStorage.setItem("data", JSON.stringify(basket));
    };
    
    
    
    let update = (id) => {
      let search = basket.find((x) => x.id === id);
      document.getElementById(id).innerHTML = search.item;
      calculation();
      calculateTotalPrice();
    };

    let removeItem = (id) => {
      let selectedItem = id;
      basket = basket.filter((x) => x.id !== selectedItem.id);
      calculation();
      generateCartItems();
      TotalAmount();
      localStorage.setItem("data", JSON.stringify(basket));
    };
    

    let TotalAmount = () => {
      if (basket.length !== 0) {
        let amount = basket
          .map((x) => {
            let { id, item } = x;
              let filterData = fullMenuItems.find((x) => x.id === id);
              return filterData.price * item;
            
          })
          .reduce((x, y) => x + y, 0);
          return document.querySelectorAll(".orderTotal").forEach(order =>{
            order.innerHTML=amount;
          });
        } else return;
      };

    TotalAmount();

      let clearCart = () => {
        basket = [];
        generateCartItems();
        calculation();
        localStorage.setItem("data", JSON.stringify(basket));
      };
      document.getElementById("clearCart").addEventListener("click",()=>{
        clearCart();
      })


      document.getElementById('checkoutButton').addEventListener('click', async function () {
        try {
            // Dynamically fetch the total amount from the cart summary
            const orderTotalElement = document.querySelector(".orderTotal");
            const amount = parseInt(orderTotalElement.innerHTML) * 100; // Convert to paisa (₹500 -> 50000)
    
            if (isNaN(amount) || amount <= 0) {
                alert("Invalid amount. Please check your cart.");
                return;
            }
    
            const response = await fetch('/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount }), // Send the amount in paisa
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.error || "Failed to create Razorpay order.");
            }
    
            const options = {
                key: "rzp_test_YFasd7SnuZcubY", // Razorpay Key ID
                amount: data.amount,
                currency: data.currency,
                order_id: data.id,
                name: "Arabian",
                description: "Test Transaction",
                handler: function (response) {
                    alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                    // Add your post-payment logic here
                },
                prefill: {
                    name: "Customer Name",
                    email: "customer@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#3399cc",
                },
            };
    
            const rzp = new Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("Failed to initiate payment. Please try again.");
        }
    });
    
