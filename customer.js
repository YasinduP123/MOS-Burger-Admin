let customerCard = document.getElementById("customerCard");
document.getElementById("addCustomerBtnOnAction").addEventListener("click",addCustomerOnAction);




let cardBody = "";



function addCustomerOnAction(){
    let inputCustomerName = document.getElementById("inputCustomerName").value;
let inputCustomerAge = document.getElementById("inputCustomerAge").value;
let inputCustomerFavouriteItem = document.getElementById("inputCustomerFavouriteItem").value;
let inputCustomerBDay = document.getElementById("inputCustomerBDay").value;
let inputCustomerAddress = document.getElementById("inputCustomerAddress").value;
let inputCustomerMostOrderdItem = document.getElementById("inputCustomerMostOrderdItem").value;
    cardBody+=`
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

    customerCard.innerHTML = cardBody;
}

