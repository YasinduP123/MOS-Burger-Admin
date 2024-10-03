

// document.getElementById("addInputButton").addEventListener("click", addRowBtnOnAction);
// let inputContainer = document.getElementById("inputContainer")

// let input = 1;
// function addRowBtnOnAction() {

//   inputContainer.appendChild(document.createElement('br'));

//   let inpField = document.createElement('input');
//   let qtyField = document.createElement('input');

//   inpField.id = `inpField${input}`
//   qtyField.id = `qtyField${input}`

//   console.log(`inpField${input}`);
//   console.log(`qtyField${input}`);

//   inpField.type = 'text';
//   qtyField.type = 'number';

//   inpField.placeholder = `Item ${input}`;
//   qtyField.placeholder = 'Qty';

//   inpField.classList.add('form-control', 'input-data');
//   qtyField.classList.add('form-control', 'input-data');

//   inputContainer.appendChild(inpField);
//   inputContainer.appendChild(qtyField);

//   input++;
// }


// {
//   let customerCard = document.getElementById("orderCard");
//   document.getElementById("addCustomerBtnOnAction").addEventListener("click", addCustomerOnAction);




  let cardBody = "";



  function addCustomerOnAction() {
    let inputCustomerName = document.getElementById("inputCustomerName").value;
    let inputCustomerAge = document.getElementById("inputCustomerAge").value;
    let inputCustomerFavouriteItem = document.getElementById("inputCustomerFavouriteItem").value;
    let inputCustomerBDay = document.getElementById("inputCustomerBDay").value;
    let inputCustomerAddress = document.getElementById("inputCustomerAddress").value;
    let inputCustomerMostOrderdItem = document.getElementById("inputCustomerMostOrderdItem").value;
    cardBody += `
    <div class="customer-card"> 
<div class="profile-pic">
    <!-- // -->
</div>
<div class="bio">
        <table class="customers-table">
            <tr class="table-cust-row">
                <th class="table-cust-head">Name</th>
                <th class="table-cust-head2">${inputCustomerName}</th>
            </tr>
            <tr class="table-cust-row">
                <td class="table-cust-data">Age</td>
                <td class="table-cust-data2">${inputCustomerAge}</td>
            </tr>
            <tr class="table-cust-row">
                <td class="table-cust-data">Favourite Item</td>
                <td class="table-cust-data2">${inputCustomerFavouriteItem}</td>
            </tr>
            <tr class="table-cust-row">
                <td class="table-cust-data">Birthday</td>
                <td class="table-cust-data2">${inputCustomerBDay}</td>
            </tr>
            <tr class="table-cust-row">
                <td class="table-cust-data">Address</td>
                <td class="table-cust-data2">${inputCustomerAddress}</td>
            </tr>
            <tr class="table-cust-row">
                <td class="table-cust-data">Most Ordered Item</td>
                <td class="table-cust-data2">${inputCustomerMostOrderdItem}</td>
            </tr>
        </table>
    </div>
</div>


    `

    orderCard.innerHTML = cardBody;
  }

// }

let burgers = [
  { itemCode: "B1001", itemName: "Classic Burger (Large)", price: 750.00, discount: "-", stock: 58, image: "images/classicBurger.png" },
  { itemCode: "B1002", itemName: "Classic Burger (Regular)", price: 1500.00, discount: "15%", stock: 82, image: "images/classicBurger.png" },
  { itemCode: "B1003", itemName: "Turkey Burger", price: 1600.00, discount: "-", stock: 40, image: "images/TurkeyBurger.jpg" },
  { itemCode: "B1004", itemName: "Chicken Burger (Large)", price: 1400.00, discount: "-", stock: 92, image: "images/chickenBurger.jpg" },
  { itemCode: "B1005", itemName: "Chicken Burger (Regular)", price: 800.00, discount: "20%", stock: 73, image: "images/chickenBurger.jpg" },
  { itemCode: "B1006", itemName: "Cheese Burger (Large)", price: 1000.00, discount: "-", stock: 67, image: "images/cheeseBurger.jpg" },
  { itemCode: "B1007", itemName: "Cheese Burger (Regular)", price: 600.00, discount: "-", stock: 84, image: "images/cheeseBurger.jpg" },
  { itemCode: "B1008", itemName: "Bacon Burger", price: 650.00, discount: "15%", stock: 61, image: "images/baconBurger.jpg" },
  { itemCode: "B1009", itemName: "Shawarma Burger", price: 800.00, discount: "-", stock: 56, image: "images/shawarmaBurger.jpg" },
  { itemCode: "B1010", itemName: "Olive Burger", price: 1800.00, discount: "-", stock: 42, image: "images/oliveBurger.jpg" },
  { itemCode: "B1012", itemName: "Double-Cheese Burger", price: 1250.00, discount: "20%", stock: 50, image: "images/doubleCheeseBurger.jpg" },
  { itemCode: "B1013", itemName: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: "-", stock: 76, image: "images/crispyChicken.jpg" },
  { itemCode: "B1014", itemName: "Crispy Chicken Burger (Large)", price: 1600.00, discount: "10%", stock: 68, image: "images/crispyChicken.jpg" },
  { itemCode: "B1015", itemName: "Paneer Burger", price: 900.00, discount: "-", stock: 79, image: "images/paneerBurger.jpg" }
];

let submarines = [
  { itemCode: "B1016", itemName: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: "-", stock: 31, image: "images/crispyChickenSub.jpg" },
  { itemCode: "B1017", itemName: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: "-", stock: 27, image: "images/crispyChickenSub.jpg" },
  { itemCode: "B1018", itemName: "Chicken Submarine (Large)", price: 1800.00, discount: "3%", stock: 21, image: "images/chickenSub.jpg" },
  { itemCode: "B1019", itemName: "Chicken Submarine (Regular)", price: 1400.00, discount: "-", stock: 33, image: "images/chickenSub.jpg" },
  { itemCode: "B1020", itemName: "Grinder Submarine", price: 2300.00, discount: "-", stock: 29, image: "images/grinderSub.jpg" },
  { itemCode: "B1021", itemName: "Cheese Submarine", price: 2200.00, discount: "-", stock: 45, image: "images/cheeseSub.jpg" },
  { itemCode: "B1022", itemName: "Double Cheese n Chicken Submarine", price: 1900.00, discount: "16%", stock: 40, image: "images/doubleCheeseChickenSub.jpg" },
  { itemCode: "B1023", itemName: "Special Horgie Submarine", price: 2800.00, discount: "-", stock: 22, image: "images/specialHorgie.jpg" },
  { itemCode: "B1024", itemName: "MOS Special Submarine", price: 3000.00, discount: "-", stock: 18, image: "images/mosSpecialSub.jpg" }
];

let fries = [
  { itemCode: "B1025", itemName: "Steak Fries (Large)", price: 1200.00, discount: "-", stock: 65, image: "images/steakFries.jpg" },
  { itemCode: "B1026", itemName: "Steak Fries (Medium)", price: 600.00, discount: "-", stock: 58, image: "images/steakFries.jpg" },
  { itemCode: "B1027", itemName: "French Fries (Large)", price: 800.00, discount: "-", stock: 72, image: "images/frenchFries.jpg" },
  { itemCode: "B1028", itemName: "French Fries (Medium)", price: 650.00, discount: "-", stock: 48, image: "images/frenchFries.jpg" },
  { itemCode: "B1029", itemName: "French Fries (Small)", price: 450.00, discount: "-", stock: 81, image: "images/frenchFries.jpg" },
  { itemCode: "B1030", itemName: "Sweet Potato Fries (Large)", price: 600.00, discount: "-", stock: 52, image: "images/sweetPotatoFries.jpg" }
];

let pasta = [
  { itemCode: "B1031", itemName: "Chicken n Cheese Pasta", price: 1600.00, discount: "15%", stock: 34, image: "images/chickenCheesePasta.jpg" },
  { itemCode: "B1032", itemName: "Chicken Penne Pasta", price: 1700.00, discount: "-", stock: 42, image: "images/chickenPennePasta.jpg" },
  { itemCode: "B1033", itemName: "Ground Turkey Pasta Bake", price: 2900.00, discount: "10%", stock: 38, image: "images/turkeyPastaBake.jpg" },
  { itemCode: "B1034", itemName: "Creamy Shrimp Pasta", price: 2000.00, discount: "-", stock: 44, image: "images/creamyShrimpPasta.jpeg" },
  { itemCode: "B1035", itemName: "Lemon Butter Pasta", price: 1950.00, discount: "-", stock: 36, image: "images/lemonButterPasta.jpg" },
  { itemCode: "B1036", itemName: "Tagliatelle Pasta", price: 2400.00, discount: "1%", stock: 28, image: "images/tagliatellePasta.jpg" },
  { itemCode: "B1037", itemName: "Baked Ravioli", price: 2000.00, discount: "1%", stock: 30, image: "images/bakedRavioli.jpg" }
];

let chicken = [
  { itemCode: "B1038", itemName: "Fried Chicken (Small)", price: 1200.00, discount: "-", stock: 35, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1039", itemName: "Fried Chicken (Regular)", price: 2300.00, discount: "10%", stock: 40, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1040", itemName: "Fried Chicken (Large)", price: 3100.00, discount: "5%", stock: 33, image: "images/friedChickenSmall.jpg" },
  { itemCode: "B1041", itemName: "Hot Wings (Large)", price: 2400.00, discount: "-", stock: 22, image: "images/hotWingsLarge.jpg" },
  { itemCode: "B1042", itemName: "Devilled Chicken (Large)", price: 900.00, discount: "-", stock: 29, image: "images/devilledChicken.jpg" },
  { itemCode: "B1043", itemName: "BBQ Chicken (Regular)", price: 2100.00, discount: "-", stock: 18, image: "images/bbqChickenRegular.jpg" }
];

let drinks = [
  { itemCode: "B1044", itemName: "Pepsi (330ml)", price: 990.00, discount: "5%", stock: 105, image: "images/pepsi.jpg" },
  { itemCode: "B1045", itemName: "Coca-Cola (330ml)", price: 1230.00, discount: "-", stock: 93, image: "images/cocacola.jpg" },
  { itemCode: "B1046", itemName: "Sprite (330ml)", price: 1500.00, discount: "3%", stock: 114, image: "images/sprite.jpg" },
  { itemCode: "B1047", itemName: "Mirinda (330ml)", price: 850.00, discount: "7%", stock: 125, image: "images/mirinda.jpg" }
];

let orderDetailList = [];

function loadItemCard() {
  let index = 0;
  let cardBody = "";
  
  burgers.forEach(item => {
    cardBody += `
      <div class="card m-3 p-3 rounded-5 bg-danger" style="width: 18rem;">
        <img style="height:200px" src="${item.image}" class="card-img-top rounded-5" alt="...">
        <div class="card-body">
          <h5 class="card-title text-light">${item.itemName}</h5>
        </div>
        <ul class="list-group list-group-flush bg-light">
          <li class="list-group-item bg-danger text-light">Item Code &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:&nbsp; &nbsp;&nbsp; &nbsp;${item.itemCode}</li>
          <li class="list-group-item bg-danger text-light">Unit price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; :&nbsp;&nbsp; &nbsp;  &nbsp;${item.price}</li>
          <li class="list-group-item bg-danger id=burgerStock${index} text-light">Quantity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; : &nbsp; &nbsp; &nbsp;${item.stock}</li>
        </ul>
        <div class="card-body">
          <div class="form-outline w-50">
            <input type="number" id="burgerQty_${index}" min=0 max=${item.stock} class="form-control text-light mb-3 w-75" placeholder="Qty" style="background-color:red;" />
          </div>
          <button class="btn btn-success" id="burger_${index}">Add to cart</button>
        </div>
      </div>
    `;
    index++;
  });

  document.getElementById("orderCard").innerHTML = cardBody;
}


// ====================================================VIEW BURGER==========================================================

document.getElementById("btnViewBurger").addEventListener("click", () => {
  let index = 0;
  let cardBody = "";
  
  burgers.forEach(item => {
    cardBody += `
      <div class="card m-3 p-3 rounded-5 bg-danger" style="width: 18rem;">
        <img style="height:200px" src="${item.image}" class="card-img-top rounded-5" alt="...">
        <div class="card-body">
          <h5 class="card-title text-light">${item.itemName}</h5>
        </div>
        <ul class="list-group list-group-flush bg-light">
          <li class="list-group-item bg-danger text-light">Item Code &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:&nbsp; &nbsp;&nbsp; &nbsp;${item.itemCode}</li>
          <li class="list-group-item bg-danger text-light">Unit price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; :&nbsp;&nbsp; &nbsp;  &nbsp;${item.price}</li>
          <li class="list-group-item bg-danger id=burgerStock${index} text-light">Quantity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; : &nbsp; &nbsp; &nbsp;${item.stock}</li>
        </ul>
        <div class="card-body">
          <div class="form-outline w-50">
            <input type="number" id="burgerQty_${index}" min=0 max=${item.stock} class="form-control text-light mb-3 w-75" placeholder="Qty" style="background-color:red;" />
          </div>
          <button type="button" class="btn btn-success" id="burger_${index}">Add to cart</button>
        </div>
      </div>
    `;
    index++;
  });

  document.getElementById("orderCard").innerHTML = cardBody;
  burgers.forEach((item, i) => {
    document.getElementById(`burger_${i}`).addEventListener("click", (e) => {
      let quantity = document.getElementById(`burgerQty_${i}`).value;

      if (quantity < item.stock && quantity != 0) {
        console.log(`Item: ${item.itemName}, Quantity: ${quantity}`);

         newStock = item.stock - quantity ;

         let burgerIndex = burgers.findIndex(burger=>{
            return burger.itemCode == item.itemCode
         });

         console.log("burgerIndex",burgerIndex);

         burgers[burgerIndex].stock = newStock;
      
        let burgerOrder = {
          itemCode: item.itemCode,
          itemName: item.itemName,
          price: item.price,
          quantity: quantity
        };
        
        console.log("burgerOrder",burgerOrder);
        console.log("burgerList",burgers);
        console.log('NewStock',newStock);
        
        
        orderDetailList.push(burgerOrder);
        
        console.log("orderDetailList",orderDetailList);
        
      }else {
      alert('invalid quantity value !')
      }
    });

  });

});

// ====================================================VIEW SUBMARINES==========================================================

document.getElementById("btnViewSubmarine").addEventListener("click", () => {
  let index = 0;
  let cardBody = "";

  submarines.forEach(item => {
    cardBody += `
      <div class="card m-3 p-3 rounded-5 bg-danger" style="width: 18rem;">
        <img style="height:200px" src="${item.image}" class="card-img-top rounded-5" alt="...">
        <div class="card-body">
          <h5 class="card-title text-light">${item.itemName}</h5>
        </div>
        <ul class="list-group list-group-flush bg-light">
          <li class="list-group-item bg-danger text-light">Item Code &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;${item.itemCode}</li>
          <li class="list-group-item bg-danger text-light">Unit price &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;${item.price}</li>
          <li class="list-group-item bg-danger text-light">Quantity &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;<span id="subStock${index}">${item.stock}</span></li>
        </ul>
        <div class="card-body">
          <div class="form-outline w-50">
            <input type="number" id="subQty_${index}" min="0" max="${item.stock}" class="form-control text-light mb-3 w-75" placeholder="Qty" style="background-color:red;" />
          </div>
          <button class="btn btn-success" id="sub_${index}">Add to cart</button>
        </div>
      </div>
    `;
    index++;
  });

  document.getElementById("orderCard").innerHTML = cardBody;

  submarines.forEach((item, i) => {
    document.getElementById(`sub_${i}`).addEventListener("click", () => {
      let quantity = parseInt(document.getElementById(`subQty_${i}`).value, 10);

      if (quantity > 0 && quantity <= item.stock) {
        console.log(`Item: ${item.itemName}, Quantity: ${quantity}`);

        let newStock = item.stock - quantity;
        item.stock = newStock;

        document.getElementById(`subStock${i}`).innerText = newStock;

        let subOrder = {
          itemCode: item.itemCode,
          itemName: item.itemName,
          price: item.price,
          quantity: quantity
        };

        orderDetailList.push(subOrder);

        console.log("Order details:", orderDetailList);
      } else {
        alert('Invalid quantity value!');
      }
    });
  });
});



// ====================================================VIEW FRIES==========================================================

document.getElementById("btnViewFries").addEventListener("click", () => {
  let index = 0;
  let cardBody = "";
  fries.forEach(item => {
    cardBody += `
      <div class="card m-3 p-3 rounded-5 bg-danger" style="width: 18rem;">
        <img style="height:200px" src="${item.image}" class="card-img-top rounded-5" alt="...">
        <div class="card-body">
          <h5 class="card-title text-light">${item.itemName}</h5>
        </div>
        <ul class="list-group list-group-flush bg-light">
          <li class="list-group-item bg-danger text-light">Item Code: ${item.itemCode}</li>
          <li class="list-group-item bg-danger text-light">Unit Price: ${item.price}</li>
          <li class="list-group-item bg-danger text-light">Quantity: ${item.stock}</li>
        </ul>
        <div class="card-body">
          <input type="number" id="friesQty_${index}" min=0 max=${item.stock} class="form-control mb-3" placeholder="Qty" style="background-color:red;">
          <button class="btn btn-success" id="fries_${index}">Add to cart</button>
        </div>
      </div>
    `;
    index++;
  });
  document.getElementById("orderCard").innerHTML = cardBody;

  fries.forEach((item, i) => {
    document.getElementById(`fries_${i}`).addEventListener("click", () => {
      let quantity = document.getElementById(`friesQty_${i}`).value;

      if (quantity < item.stock && quantity != 0) {
        let newStock = item.stock - quantity;
        fries[i].stock = newStock;

        let friesOrder = {
          itemCode: item.itemCode,
          itemName: item.itemName,
          price: item.price,
          quantity: quantity
        };

        orderDetailList.push(friesOrder);
        console.log("Order details:", orderDetailList);
      } else {
        alert('Invalid quantity value!');
      }
    });
  });
});


// ====================================================VIEW PASTA==========================================================


document.getElementById("btnViewPasta").addEventListener("click", () => {
  let index = 0;
  let cardBody = "";
  pasta.forEach(item => {
    cardBody += `
      <div class="card m-3 p-3 rounded-5 bg-danger" style="width: 18rem;">
        <img style="height:200px" src="${item.image}" class="card-img-top rounded-5" alt="...">
        <div class="card-body">
          <h5 class="card-title text-light">${item.itemName}</h5>
        </div>
        <ul class="list-group list-group-flush bg-light">
          <li class="list-group-item bg-danger text-light">Item Code: ${item.itemCode}</li>
          <li class="list-group-item bg-danger text-light">Unit Price: ${item.price}</li>
          <li class="list-group-item bg-danger text-light">Quantity: ${item.stock}</li>
        </ul>
        <div class="card-body">
          <input type="number" id="pastaQty_${index}" min=0 max=${item.stock} class="form-control mb-3" placeholder="Qty" style="background-color:red;">
          <button class="btn btn-success" id="pasta_${index}">Add to cart</button>
        </div>
      </div>
    `;
    index++;
  });
  document.getElementById("orderCard").innerHTML = cardBody;

  pasta.forEach((item, i) => {
    document.getElementById(`pasta_${i}`).addEventListener("click", () => {
      let quantity = document.getElementById(`pastaQty_${i}`).value;

      if (quantity < item.stock && quantity != 0) {
        let newStock = item.stock - quantity;
        pasta[i].stock = newStock;

        let pastaOrder = {
          itemCode: item.itemCode,
          itemName: item.itemName,
          price: item.price,
          quantity: quantity
        };

        orderDetailList.push(pastaOrder);
        console.log("Order details:", orderDetailList);
      } else {
        alert('Invalid quantity value!');
      }
    });
  });
});


// ====================================================VIEW CHICKEN==========================================================

document.getElementById("btnViewChicken").addEventListener("click", () => {
  let index = 0;
  let cardBody = "";
  chicken.forEach(item => {
    cardBody += `
      <div class="card m-3 p-3 rounded-5 bg-danger" style="width: 18rem;">
        <img style="height:200px" src="${item.image}" class="card-img-top rounded-5" alt="...">
        <div class="card-body">
          <h5 class="card-title text-light">${item.itemName}</h5>
        </div>
        <ul class="list-group list-group-flush bg-light">
          <li class="list-group-item bg-danger text-light">Item Code: ${item.itemCode}</li>
          <li class="list-group-item bg-danger text-light">Unit Price: ${item.price}</li>
          <li class="list-group-item bg-danger text-light">Quantity: ${item.stock}</li>
        </ul>
        <div class="card-body">
          <input type="number" id="chickenQty_${index}" min=0 max=${item.stock} class="form-control mb-3" placeholder="Qty" style="background-color:red;">
          <button class="btn btn-success" id="chicken_${index}">Add to cart</button>
        </div>
      </div>
    `;
    index++;
  });
  document.getElementById("orderCard").innerHTML = cardBody;

  chicken.forEach((item, i) => {
    document.getElementById(`chicken_${i}`).addEventListener("click", () => {
      let quantity = document.getElementById(`chickenQty_${i}`).value;

      if (quantity < item.stock && quantity != 0) {
        let newStock = item.stock - quantity;
        chicken[i].stock = newStock;

        let chickenOrder = {
          itemCode: item.itemCode,
          itemName: item.itemName,
          price: item.price,
          quantity: quantity
        };

        orderDetailList.push(chickenOrder);
        console.log("Order details:", orderDetailList);
      } else {
        alert('Invalid quantity value!');
      }
    });
  });
});

// ====================================================VIEW DRINKS==========================================================

document.getElementById("btnViewDrinks").addEventListener("click", () => {
  let index = 0;
  let cardBody = "";
  drinks.forEach(item => {
    cardBody += `
      <div class="card m-3 p-3 rounded-5 bg-danger" style="width: 18rem;">
        <img style="height:200px" src="${item.image}" class="card-img-top rounded-5" alt="...">
        <div class="card-body">
          <h5 class="card-title text-light">${item.itemName}</h5>
        </div>
        <ul class="list-group list-group-flush bg-light">
          <li class="list-group-item bg-danger text-light">Item Code: ${item.itemCode}</li>
          <li class="list-group-item bg-danger text-light">Unit Price: ${item.price}</li>
          <li class="list-group-item bg-danger text-light">Quantity: ${item.stock}</li>
        </ul>
        <div class="card-body">
          <input type="number" id="drinksQty_${index}" min=0 max=${item.stock} class="form-control mb-3" placeholder="Qty" style="background-color:red;">
          <button class="btn btn-success" id="drinks_${index}">Add to cart</button>
        </div>
      </div>
    `;
    index++;
  });
  document.getElementById("orderCard").innerHTML = cardBody;

  drinks.forEach((item, i) => {
    document.getElementById(`drinks_${i}`).addEventListener("click", () => {
      let quantity = document.getElementById(`drinksQty_${i}`).value;

      if (quantity < item.stock && quantity != 0) {
        let newStock = item.stock - quantity;
        drinks[i].stock = newStock;

        let drinksOrder = {
          itemCode: item.itemCode,
          itemName: item.itemName,
          price: item.price,
          quantity: quantity
        };

        orderDetailList.push(drinksOrder);
        console.log("Order details:", orderDetailList);
      } else {
        alert('Invalid quantity value!');
      }
    });
  });
});

// ===================================================ADD PROCEED TO CHECKOUT=========================================================

document.getElementById("btnProceedCheckout").addEventListener("click", () => {
  let totalPrice = orderDetailList.reduce((total, order) => total + order.price * order.quantity, 0);

  let cardBody = `
  <div class="card m-3 p-3 rounded-5 bg-danger" style="width: 100%;">
    <div class="card-body">
      <h5 class="card-title text-light">Order Summary</h5>
    </div>
    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          ${orderDetailList.map(order => `
            <tr>
              <td>${order.itemName}</td>
              <td>${order.quantity}</td>
              <td>${order.price * order.quantity}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <div class="card-body text-light">
      <h6 class="card-title">Total Price: ${totalPrice}</h6>
      <button class="btn btn-success" id="btnConfirmCheckout">Confirm Checkout</button>
    </div>
  </div>
`;

document.getElementById("orderSummary").innerHTML = cardBody;

document.getElementById("btnConfirmCheckout").addEventListener("click", () => {
  alert('Order confirmed! Total price: ' + totalPrice);
  orderDetailList = []; // Clear the cart after confirmation
  document.getElementById("orderSummary").innerHTML = ''; // Clear the summary card
});


  document.getElementById("orderSummary").innerHTML = cardBody;

  document.getElementById("btnConfirmCheckout").addEventListener("click", () => {
    alert('Order confirmed! Total price: ' + totalPrice);
    orderDetailList = []; 
    document.getElementById("orderSummary").innerHTML = ''; 
  });
});

