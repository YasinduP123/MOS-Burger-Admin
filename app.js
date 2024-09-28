// document.getElementById().addEventListener("click", btnAddItem);

// function btnAddItem() {
//     window.location.href = "addNewItem.html";
// }


// Add elements as objects
// arrayList.push({ id: "B0130", name: "Ham Burger", price: "704", discount: "-" });
// arrayList.push({ id: "B0131", name: "Chicken Burger", price: "704", discount: "10%" });
// arrayList.push({ id: "B0132", name: "Black Burger", price: "904", discount: "14%" });
// arrayList.push({ id: "B0133", name: "Chicken Bucket", price: "2004", discount: "14%" });
// arrayList.push({ id: "B0134", name: "Lasagna", price: "704", discount: "12%" });
// arrayList.push({ id: "B0135", name: "Pizza", price: "1302", discount: "12%" });  // Corrected the ID to be unique
{
let tableBody = `
<tr class="customer-table-row">
                      <th class="customer-table-head">Item Code</th>
                      <th class="customer-table-head">Item Name</th>
                      <th class="customer-table-head">Price (LKR)</th>
                      <th class="customer-table-head">Discount</th>
</tr>

`


let arrayList = [];

document.getElementById("btnAddNewItemEvent").addEventListener("click",btnAddNewItemOnAction);
// document.getElementById("btnDeleteItem").addEventListener("click",btnDeleteItemOnAction);
function btnAddNewItemOnAction(){
    let inpItemCode = document.getElementById("inpItemCode").value;
    let inpItemName = document.getElementById("inpItemName").value;
    let inpPrice = document.getElementById("inpPrice").value;
    let inpDiscount = document.getElementById("inpDiscount").value;
    
    // let data = arrayList.push({ id: inpItemCode, name: inpItemName, price: inpPrice, discount: inpDiscount });
        
    
    tableBody += `
        <tr>
            <td class="customer-table-data">${inpItemCode}</td>
            <td class="customer-table-data">${inpItemName}</td>
            <td class="customer-table-data">${inpPrice}</td>
            <td class="customer-table-data">${inpDiscount}</td>
        </tr>`;
    
    let item = document.getElementById("addNewItems");
    item.innerHTML = tableBody;
}
let item = document.getElementById("addNewItems");
item.innerHTML = tableBody;
}