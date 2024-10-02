window.onload = loadItemTable;

let tableBody = `
                        <thead>
                          <tr>
                            <th scope="col">Item Code</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discount</th>
                          </tr>
                        </thead>
    
    `

document.getElementById("btnAddNewItemEvent").addEventListener("click", btnAddNewItemOnAction);

let itemList = [
    { itemCode: "B1001", itemName: "Classic Burger (Large)", price: 750.00, discount: "-" },
    { itemCode: "B1002", itemName: "Classic Burger (Regular)", price: 1500.00, discount: "15%" },
    { itemCode: "B1003", itemName: "Turkey Burger", price: 1600.00, discount: "-" },
    { itemCode: "B1004", itemName: "Chicken Burger (Large)", price: 1400.00, discount: "-" },
    { itemCode: "B1005", itemName: "Chicken Burger (Regular)", price: 800.00, discount: "20%" },
    { itemCode: "B1006", itemName: "Cheese Burger (Large)", price: 1000.00, discount: "-" },
    { itemCode: "B1007", itemName: "Cheese Burger (Regular)", price: 600.00, discount: "-" },
    { itemCode: "B1008", itemName: "Bacon Burger", price: 650.00, discount: "15%" },
    { itemCode: "B1009", itemName: "Shawarma Burger", price: 800.00, discount: "-" },
    { itemCode: "B1010", itemName: "Olive Burger", price: 1800.00, discount: "-" },
    { itemCode: "B1012", itemName: "Double-Cheese Burger", price: 1250.00, discount: "20%" },
    { itemCode: "B1013", itemName: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: "-" },
    { itemCode: "B1014", itemName: "Crispy Chicken Burger (Large)", price: 1600.00, discount: "10%" },
    { itemCode: "B1015", itemName: "Paneer Burger", price: 900.00, discount: "-" },
    { itemCode: "B1016", itemName: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: "-" },
    { itemCode: "B1017", itemName: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: "-" },
    { itemCode: "B1018", itemName: "Chicken Submarine (Large)", price: 1800.00, discount: "3%" },
    { itemCode: "B1019", itemName: "Chicken Submarine (Regular)", price: 1400.00, discount: "-" },
    { itemCode: "B1020", itemName: "Grinder Submarine", price: 2300.00, discount: "-" },
    { itemCode: "B1021", itemName: "Cheese Submarine", price: 2200.00, discount: "-" },
    { itemCode: "B1022", itemName: "Double Cheese n Chicken Submarine", price: 1900.00, discount: "16%" },
    { itemCode: "B1023", itemName: "Special Horgie Submarine", price: 2800.00, discount: "-" },
    { itemCode: "B1024", itemName: "MOS Special Submarine", price: 3000.00, discount: "-" },
    { itemCode: "B1025", itemName: "Steak Fries (Large)", price: 1200.00, discount: "-" },
    { itemCode: "B1026", itemName: "Steak Fries (Medium)", price: 600.00, discount: "-" },
    { itemCode: "B1027", itemName: "French Fries (Large)", price: 800.00, discount: "-" },
    { itemCode: "B1028", itemName: "French Fries (Medium)", price: 650.00, discount: "-" },
    { itemCode: "B1029", itemName: "French Fries (Small)", price: 450.00, discount: "-" },
    { itemCode: "B1030", itemName: "Sweet Potato Fries (Large)", price: 600.00, discount: "-" },
    { itemCode: "B1031", itemName: "Chicken n Cheese Pasta", price: 1600.00, discount: "15%" },
    { itemCode: "B1032", itemName: "Chicken Penne Pasta", price: 1700.00, discount: "-" },
    { itemCode: "B1033", itemName: "Ground Turkey Pasta Bake", price: 2900.00, discount: "10%" },
    { itemCode: "B1034", itemName: "Creamy Shrimp Pasta", price: 2000.00, discount: "-" },
    { itemCode: "B1035", itemName: "Lemon Butter Pasta", price: 1950.00, discount: "-" },
    { itemCode: "B1036", itemName: "Tagliatelle Pasta", price: 2400.00, discount: "1%" },
    { itemCode: "B1037", itemName: "Baked Ravioli", price: 2000.00, discount: "1%" },
    { itemCode: "B1038", itemName: "Fried Chicken (Small)", price: 1200.00, discount: "-" },
    { itemCode: "B1039", itemName: "Fried Chicken (Regular)", price: 2300.00, discount: "10%" },
    { itemCode: "B1040", itemName: "Fried Chicken (Large)", price: 3100.00, discount: "5%" },
    { itemCode: "B1041", itemName: "Hot Wings (Large)", price: 2400.00, discount: "-" },
    { itemCode: "B1042", itemName: "Devilled Chicken (Large)", price: 900.00, discount: "-" },
    { itemCode: "B1043", itemName: "BBQ Chicken (Regular)", price: 2100.00, discount: "-" },
    { itemCode: "B1044", itemName: "Pepsi (330ml)", price: 990.00, discount: "5%" },
    { itemCode: "B1045", itemName: "Coca-Cola (330ml)", price: 1230.00, discount: "-" },
    { itemCode: "B1046", itemName: "Sprite (330ml)", price: 1500.00, discount: "3%" },
    { itemCode: "B1047", itemName: "Mirinda (330ml)", price: 850.00, discount: "7%" }
];

let itemCode = "";
let itemName = "";
let price = "";
let discount = "";


// document.getElementById("btnDeleteItem").addEventListener("click",btnDeleteItemOnAction);
function btnAddNewItemOnAction() {
    loadItemTable();
        alert("Item added successfully.");
}





function loadItemTable() {
    let inpItemCode = document.getElementById("inpItemCode").value;
    let inpItemName = document.getElementById("inpItemName").value;
    let inpPrice = document.getElementById("inpPrice").value;
    let inpDiscount = document.getElementById("inpDiscount").value;

    let itemDetail = {
        itemCode: inpItemCode,
        itemName: inpItemName,
        price: inpPrice,
        discount: inpDiscount
    }

    itemList.push(itemDetail);

    tableBody += `
            <tr>
                <th scope="row">${inpItemCode}</th>
                <td>${inpItemName}</td>
                <td>${inpPrice}</td>
                <td>${inpDiscount}</td>
            </tr>    
            `;

    let item = document.getElementById("addNewItems");
    item.innerHTML = tableBody;

    console.log("itemList ", itemList);


}

itemList.forEach(items => {
    tableBody += `
        <tr>
            <th scope="row">${items.itemCode}</th>
            <td>${items.itemName}</td>
            <td>${items.price}</td>
            <td>${items.discount}</td>
        </tr>
    `;
})




document.getElementById("btnSearchItemEvent").addEventListener("click", () => {
    let searchItem = document.getElementById("inpItemCode").value;

    let getSearchIndex = itemList.findIndex(item => {
        return item.itemCode == searchItem;
    })

    console.log("filteredItems ", getSearchIndex);

    if (getSearchIndex === -1) {
        alert("Item not found!");
    } else {
        let getSearchedItem = itemList[getSearchIndex];
        let viewSearchedItemCode = document.getElementById("inpItemCode");
        let viewSearchedItemName = document.getElementById("inpItemName");
        let viewSearchedPrice = document.getElementById("inpPrice");
        let viewSearchedDiscount = document.getElementById("inpDiscount");

        viewSearchedItemCode.value = getSearchedItem.itemCode
        viewSearchedItemName.value = getSearchedItem.itemName
        viewSearchedPrice.value = getSearchedItem.price
        viewSearchedDiscount.value = getSearchedItem.discount;

        `
            <tr>
                <th scope="row">${getSearchedItem.itemCode}</th>
                <td>${getSearchedItem.itemName}</td>
                <td>${getSearchedItem.price}</td>
                <td>${getSearchedItem.discount}</td>
            </tr>
        `;

        console.log("Searched item ", getSearchedItem);
    }

});

document.getElementById("btnDeleteItemEvent").addEventListener("click", () => {
    let deleteItem = document.getElementById("inpItemCode").value;

    let getDeleteIndex = itemList.findIndex(item => {
        return item.itemCode == deleteItem;
    })

    if (getDeleteIndex === -1) {
        alert("Item not found!");
    } else {
        itemList.splice(getDeleteIndex, 1);
        alert("Item deleted successfully!");
        console.log(itemList);

    }

})

document.getElementById("btnUpdateItemEvent").addEventListener("click", () => {
    let updateItem = document.getElementById("inpItemCode").value;

    let getUpdateIndex = itemList.findIndex(item => {
        return item.itemCode == updateItem;
    })

    if (getUpdateIndex === -1) {
        alert("Item not found!");
    } else {
        let updatedItemName = document.getElementById("inpItemName").value;
        let updatedPrice = document.getElementById("inpPrice").value;
        let updatedDiscount = document.getElementById("inpDiscount").value;

        itemList[getUpdateIndex].itemName = updatedItemName;
        itemList[getUpdateIndex].price = updatedPrice;
        itemList[getUpdateIndex].discount = updatedDiscount;
        alert("Item updated successfully!");
        console.log(itemList);
    }
})