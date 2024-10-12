const itemList = document.querySelector(".item_list");
const cart = document.querySelector(".cart");
const total = document.querySelector(".total button");
const totalResult = document.querySelector(".total_result");

const cartItems = [];

const items = [
  {
    category: "MacBook",
    name: "2023 Apple MacBook Pro 14-inch M3",
    price: 1000,
    image: "img-MacBook-Pro-Retina-14-Inch-88977.jpg",
  },
  {
    category: "iPhone",
    name: "iPhone 16 Plus",
    price: 899,
    image: "iPhone 16 Plus.webp",
  },
  {
    category: "iPhone",
    name: "iPhone 16 Pro",
    price: 1199,
    image: "iPhone 16 Pro.webp",
  },
  {
    category: "AirPods",
    name: "AorPods Max",
    price: 549,
    image: "AirPods Max.webp",
  },
  {
    category: "Apple Watch",
    name: "Apple Watch Ultra 2 With Trail Loop",
    price: 799,
    image: "Apple Watch Ultra 2 With Trail Loop.webp",
  },
  {
    category: "AirPods",
    name: "AirPods Pro (2nd Generation, 2023)",
    price: 244,
    image: "AirPods Pro (2nd Generation, 2023).webp",
  },
  {
    category: "iPad",
    name: "iPad Pro 13-inch (M4)",
    price: 1499,
    image: "iPad Pro 13-inch (M4).webp",
  },

  {
    category: "iPhone",
    name: "iPhone 14",
    price: 599,
    image: "iPhone 14.webp",
  },

  {
    category: "iPad",
    name: "iPad Air 11-inch (M2)",
    price: 599,
    image: "iPad Air 11-inch (M2).webp",
  },
];
//--------Adding items---------//
const addItems = (objs) => {
  let html = ``;

  objs.map((obj) => {
    html += `<div class="item">
            <div class="item_img">
                <img src="pic/${obj.image}" alt="">
            </div>
            <div class="item_desctiption">
                <p class="item_category">${obj.category}</p>
                <p class="item_name">${obj.name}</p>
                <p class="item_price">${obj.price}$</p>

            </div>
            <div class="add_btn"><button>Add</button></div>
        </div>`;
  });

  itemList.insertAdjacentHTML("afterbegin", html);
};
//--------Adding items---------//

//--------removing From cart---------//
const removeFromCart = (arr) => {
  const removeBtns = document.querySelectorAll(".remove_item button");
  const cartItemsElements = document.querySelectorAll(".cart_item");

  removeBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      cartItemsElements[i].remove();
      arr.splice(i, 1);

      updateCart();
      calTotal(arr);
    });
  });
};

const updateCart = () => {
  cart.innerHTML = "";

  cartItems.forEach((item, i) => {
    cart.insertAdjacentHTML(
      "beforeend",
      `<div class="cart_item">
        <div class="cart_img"><img src="pic/${item.image}" alt=""></div>
        <div class="cart_desctiption">
            <p class="cart_name">${item.name}</p>
            <p class="cart_price">Price: ${item.price}$</p>
        </div>
        <div class="item_amount"><input type="number" value="1" min="1"></div>
        <div class="remove_item"><button>X</button></div>
      </div>`
    );
  });

  removeFromCart(cartItems);
  calTotal(cartItems);
};

//--------Calculating Total---------//
const calTotal = (cartItems) => {
  total.removeEventListener("click", () => {});

  total.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".item_amount input");
    const quantity = Array.from(inputs).map(
      (input) => Number(input.value) || 0
    );

    if (cartItems.length === 0) {
      totalResult.textContent = `0$`;
      return;
    }

    const result = cartItems.reduce((acc, item, i) => {
      return acc + item.price * quantity[i];
    }, 0);

    totalResult.textContent = `${result}$`;
  });
};

//--------Adding to Cart---------//
const addToCart = (obj) => {
  const buttons = document.querySelectorAll(".add_btn button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      if (!cartItems.some((item) => item.name === obj[i].name)) {
        cartItems.push(obj[i]);
        updateCart();
      } else {
        alert("Item has already been added to the cart");
      }
    });
  });
};
//--------Adding to Cart---------//

addItems(items);
addToCart(items);

// //--------removing From cart---------//
// const removeFromCart = (arr) => {
//   const removeBtns = document.querySelectorAll(".remove_item button");
//   const cartItemsElements = document.querySelectorAll(".cart_item");

//   removeBtns.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//       cartItemsElements[i].remove();
//       arr.splice(i, 1);

//       calTotal(arr);
//     });
//   });
// };

// //--------removing from cart---------//

// const calTotal = (cartItems) => {
//   total.removeEventListener("click", () => {});

//   total.addEventListener("click", () => {
//     const inputs = document.querySelectorAll(".item_amount input");

//     const quantity = Array.from(inputs).map((input) => {
//       return Number(input.value) || 0;
//     });

//     if (cartItems.length === 0) {
//       totalResult.textContent = `0$`;
//       return;
//     }

//     const result = cartItems.reduce((acc, item, i) => {
//       return acc + item.price * quantity[quantity.length - 1 - i];
//     }, 0);

//     totalResult.textContent = `${result}$`;
//   });
// };

// //--------Adding to Cart---------//
// const addToCart = (obj) => {
//   const buttons = document.querySelectorAll(".add_btn button");
//   buttons.forEach((button, i) => {
//     const html = "";
//     button.addEventListener("click", () => {
//       if (!cartItems.some((item) => item.name === obj[i].name)) {
//         cartItems.push(obj[i]);
//         cart.insertAdjacentHTML(
//           "afterbegin",
//           `<div class="cart_item">
//             <div class="cart_img"><img src="pic/${obj[i].image}" alt=""></div>
//             <div class="cart_desctiption">
//                 <p class="cart_name">${obj[i].name}</p>
//                 <p class="cart_price">Price: ${obj[i].price}$</p>
//             </div>
//             <div class="item_amount"><input type="number" value="1" min="0"></div>
//             <div class="remove_item"><button>X</button></div>
//         </div>`
//         );
//       } else {
//         alert("Item has already added to the cart");
//       }

//       removeFromCart(cartItems);
//       calTotal(cartItems);
//     });
//   });
// };
// //--------Adding to Cart---------//

// addItems(items);
// addToCart(items);
