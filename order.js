function addOrder() {
    var pickupLocation = document.querySelector('input[placeholder="Pick-up location"]').value;
    var deliveryLocation = document.querySelector('input[placeholder="Delivery location"]').value;
    var hour = document.querySelector('select[name="hour"]').value;
    var minute = document.querySelector('select[name="minute"]').value;
    var amPm = document.querySelector('select[name="am_pm"]').value;
    var date = document.querySelector('input[name="date"]').value;

    if (pickupLocation && deliveryLocation && hour && minute && amPm && date) {
        var order = pickupLocation + " to " + deliveryLocation + " at " + hour + ":" + minute + " " + amPm + " on " + date;
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        var listItem = document.createElement("li");
        listItem.textContent = order;
        var orderList = document.getElementById("orderList");
        orderList.appendChild(listItem);
        alert("Your order has been added");
        
        // Redirect to order.html
        window.location.href = "order.html";
    } else {
        alert("Please fill in all the required fields");
    }
}