
let customerCard = document.getElementById("customerCard");
document.getElementById("addCustomerBtnOnAction").addEventListener("click", btnAddCustomerOnAction);

let custId = "";
let customerName = "";
let customerFavoriteItem = "";
let customerBDay = "";
let customerAddress = "";
let customerMostOderedItem = "";

let customerList = [];

function addCustomerToList() {
    let inputCustomerId = document.getElementById("inputCustomerId").value;
    let inputCustomerName = document.getElementById("inputCustomerName").value;
    let inputCustomerFavouriteItem = document.getElementById(
        "inputCustomerFavouriteItem"
    ).value;
    let inputCustomerBDay = document.getElementById("inputCustomerBDay").value;
    let inputCustomerAddress = document.getElementById(
        "inputCustomerAddress"
    ).value;
    let inputCustomerMostOrderdItem = document.getElementById(
        "inputCustomerMostOrderdItem"
    ).value;

    custId = inputCustomerId;
    customerName = inputCustomerName;
    customerFavoriteItem = inputCustomerFavouriteItem;
    customerBDay = inputCustomerBDay;
    customerAddress = inputCustomerAddress;
    customerMostOderedItem = inputCustomerMostOrderdItem;

    console.log(inputCustomerName);

    let customerDetail = {
        id: inputCustomerId,
        name: inputCustomerName,
        favouriteItem: inputCustomerFavouriteItem,
        bDay: inputCustomerBDay,
        address: inputCustomerAddress,
        mostOrderdItem: inputCustomerMostOrderdItem,
    };

    customerList.push(customerDetail);
}

let index = 0;

function loadCustomerDetails() {
    cardBody = "";
    addCustomerToList();

    customerList.forEach((customer) => {
        cardBody += `
        <div class="col-sm-1 col-md-4 col-lg-2 customer-card" id="customerCardId${index}"> 
        <div class="profile-pic">
        <!-- // -->
        </div>
        <div class="bio">
        <table class="customers-table">
        <tr class="table-cust-row">
        <th class="table-cust-head">Customer ID</th>
        <th class="table-cust-head2" id="customerId${index}">${customer.id}</th>
        </tr>
        <tr class="table-cust-row">
        <td class="table-cust-data">Name</td>
        <td class="table-cust-data2">${customer.name}</td>
        </tr>
        <tr class="table-cust-row">
        <td class="table-cust-data">Favourite Item</td>
        <td class="table-cust-data2">${customer.favouriteItem}</td>
        </tr>
        <tr class="table-cust-row">
        <td class="table-cust-data">Birthday</td>
        <td class="table-cust-data2">${customer.bDay}</td>
        </tr>
        <tr class="table-cust-row">
        <td class="table-cust-data">Address</td>
        <td class="table-cust-data2">${customer.address}</td>
        </tr>
        <tr class="table-cust-row">
        <td class="table-cust-data">Most Ordered Item</td>
        <td class="table-cust-data2">${customer.mostOrderdItem}</td>
        </tr>
        </table>
        </div style="padding-bottom : 10px;">
        <Button  class="btn btn-danger add-customer-form-edit-btn" id="deleteCustomerCard${index}">Delete</Button>
        <Button  class="btn btn-primary add-customer-form-edit-btn" id="UpdateCustomerCard${index}">Update</Button>
        </div>
        
        
        `;
    });

    index++;
    customerCard.innerHTML = cardBody;
}

function btnAddCustomerOnAction() {
    loadCustomerDetails();
}

function updateCustomer() {

    let inputCustomerIdNew = document.getElementById("inputCustomerId").value;
    let inputCustomerNameNew = document.getElementById("inputCustomerName").value;
    let inputCustomerFavouriteItemNew = document.getElementById("inputCustomerFavouriteItem").value;
    let inputCustomerBDayNew = document.getElementById("inputCustomerBDay").value;
    let inputCustomerAddressNew = document.getElementById("inputCustomerAddress").value;
    let inputCustomerMostOrderdItemNew = document.getElementById("inputCustomerMostOrderdItem").value;

    console.log("inputCustomerIdNew ", inputCustomerIdNew);
    console.log("inputCustomerNameNew ", inputCustomerNameNew);
    console.log("inputCustomerFavouriteItemNew ", inputCustomerFavouriteItemNew);
    console.log("inputCustomerBDayNew ", inputCustomerBDayNew);
    console.log("inputCustomerAddressNew ", inputCustomerAddressNew);
    console.log("inputCustomerMostOrderdItemNew ", inputCustomerMostOrderdItemNew);

}

document.getElementById("updateCustomerBtnOnAction").addEventListener("click", customerUpdateBtnOnAction)

function customerUpdateBtnOnAction() {
    let searchId = document.getElementById("inputCustomerId").value;

    if (isCustomerFound()) {
        updateCustomer();

        let customerFound = customerList.findIndex((customer) => {
            return searchId == customer.id;
        });

        let searchedCustomer = customerList[customerFound];
        console.log('Searched :', searchedCustomer);

        customerList.splice(searchedCustomer, 1);

        if (customerList.splice(searchedCustomer, 1)) {
            alert("Customer Updated Successfully!");
        }
        loadCustomerDetails();
    } else {
        alert("Customer Not Found!");
    }



}

function isCustomerFound() {
    let searchId = document.getElementById("inputCustomerId").value;

    console.log("search ", searchId);

    let customerFound = customerList.findIndex((customer) => {
        return searchId == customer.id;
    });

    return customerFound !== -1;

}

function searchCustomer() {
    let searchId = document.getElementById("inputCustomerId").value;

    let customerFound = customerList.findIndex((customer) => {
        return searchId == customer.id;
    });

    if (customerFound == -1) {
        alert("Customer Not Found!");
    } else {
        alert("Customer Found!");
    }

    let searchedCustomer = customerList[customerFound];

    console.log("customerFound ", searchedCustomer);

    let inputCustomerId = document.getElementById("inputCustomerId");
    let inputCustomerName = document.getElementById("inputCustomerName");
    let inputCustomerFavouriteItem = document.getElementById("inputCustomerFavouriteItem");
    let inputCustomerBDay = document.getElementById("inputCustomerBDay");
    let inputCustomerAddress = document.getElementById("inputCustomerAddress");
    let inputCustomerMostOrderdItem = document.getElementById("inputCustomerMostOrderdItem");

    inputCustomerId.value = searchedCustomer.id;
    inputCustomerName.value = searchedCustomer.name;
    inputCustomerFavouriteItem.value = searchedCustomer.favouriteItem;
    inputCustomerBDay.value = searchedCustomer.bDay;
    inputCustomerAddress.value = searchedCustomer.address;
    inputCustomerMostOrderdItem.value = searchedCustomer.mostOrderdItem;
}

document.getElementById("searchCustomerBtnOnAction").addEventListener("click", btnSearchedCustomerOnAction);
document.getElementById("deleteCustomerBtnOnAction").addEventListener("click", btnDeleteCustomerOnAction);

function btnDeleteCustomerOnAction() {

    if (isCustomerFound()) {
        let searchId = document.getElementById("inputCustomerId").value;

        let customerFound = customerList.findIndex((customer) => {
            return searchId == customer.id;
        });            
        

            customerList.splice(customerFound, 1);
            
            let customerFoundNow = customerList.findIndex((customer) => {
                return searchId == customer.id;
            });            
                        
            if (customerFoundNow) {
                alert("Customer deleted successfully!");
            } else {
                alert("Customer not deleted! Customer ID already exists.");
            }            

            console.log("customerList ",customerList);
            

            

    } else {
        alert("Customer Not Found!");
    }

}

function btnSearchedCustomerOnAction() {
    searchCustomer();

}

document.getElementById("customerCard").addEventListener("click", function (e) {
    if (e.target.classList.contains("add-customer-form-edit-btn") && e.target.id.startsWith("deleteCustomerCard")) {
        let index = e.target.getAttribute("id");

        let customerCardDiv = e.target.closest(`.customer-card`);
        console.log("Customer Card Element:", customerCardDiv);

        let customerIdElement = customerCardDiv.querySelector("th[id^=customerId]");
        console.log("Customer ID Element:", customerIdElement);

        let customerId = customerIdElement.innerText;

        console.log("Customer ID:", customerId);

        let selectIndex = customerList.findIndex(customer => {
            console.log("isFind ", customer.id == customerId);
            return customer.id == customerId;

        })

        console.log("selectIndex", selectIndex);

        customerList.splice(selectIndex, 1);
        customerCardDiv.remove();

    }


});



document.getElementById("customerCard").addEventListener("click", function (e) {
    if (e.target.classList.contains("add-customer-form-edit-btn") && e.target.id.startsWith("UpdateCustomerCard")) {
        let index = e.target.getAttribute("id");

        let customerCardDiv = e.target.closest(`.customer-card`);
        console.log("Customer Card Element:", customerCardDiv);

        let customerIdElement = customerCardDiv.querySelector("th[id^=customerId]");
        console.log("Customer ID Element:", customerIdElement);

        let customerId = customerIdElement.innerText;

        console.log("Customer ID:", customerId);

        let selectIndex = customerList.findIndex(customer => {
            console.log("isFind ", customer.id == customerId);
            return customer.id == customerId;

        })

        let updateCustomer = customerList[selectIndex]
        console.log("updateCustomer ", updateCustomer);

        let inputCustomerId = document.getElementById("inputCustomerId");
        let inputCustomerName = document.getElementById("inputCustomerName");
        let inputCustomerFavouriteItem = document.getElementById("inputCustomerFavouriteItem");
        let inputCustomerBDay = document.getElementById("inputCustomerBDay");
        let inputCustomerAddress = document.getElementById("inputCustomerAddress");
        let inputCustomerMostOrderdItem = document.getElementById("inputCustomerMostOrderdItem");

        inputCustomerId.value = updateCustomer.id;
        inputCustomerName.value = updateCustomer.name;
        inputCustomerFavouriteItem.value = updateCustomer.favouriteItem;
        inputCustomerBDay.value = updateCustomer.bDay;
        inputCustomerAddress.value = updateCustomer.address;
        inputCustomerMostOrderdItem.value = updateCustomer.mostOrderdItem;


    }


});



