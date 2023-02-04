"use strict";

(function () {
  console.log("hi");
})();

function Product(name, price, expiration) {
  this.productId = Math.floor(10000 + Math.random() * 9000);
  this.name = name;
  this.price = price.toFixed(2);
  this.expiration = new Date(expiration);
  this.getInfo = function () {
    var name =
      this.name.toUpperCase().charAt(0) +
      this.name.charAt(this.name.length - 1).toUpperCase();

    console.log(name);
    return `${name} , ${this.name} , ${this.price}`;
  };
}
var product1 = new Product("banana", 10.6666, "12/02/2024");
var product2 = new Product("onion", 10, "12/05/2022");
var product3 = new Product("orange", 10, "10/05/2023");
console.log(product1.getInfo());
console.log(product2);

function ShoppingBag(products) {
  var product = [];
  this.products = products;
  this.getInfo = function () {
    var dateNow = new Date();
    for (var i = 0; i < products.length; i++) {
      var element = products[i];
      console.log(element.expiration);
      var date = element.expiration;

      if (date > dateNow) {
        product.push(element.name);
        continue;
      }
    }
    return product;
  };

  this.avgPrice = function () {
    var sum = 0;
    var avg = 0;
    var length = products.length;
    for (var i = 0; i < products.length; i++) {
      var price = Number(products[i].price);
      console.log(price);
      console.log(typeof price);

      sum += price;
      console.log(sum);
      avg = sum / length;
    }
    return avg.toFixed(3);
  };
  this.getMostExpensive = function () {
    var b = products[0].price;
    console.log(b);
    var string = "";
    for (var i = 0; i < products.length; i++) {
      var price = Number(products[i].price);
      if (price > b) {
        string = `Most expensive product is ${products[i].name}`;
      } else {
        string = `Most expensive product is ${products[0].name}`;
      }
    }
    return string;
  };
  this.calculateTotalPrice = function () {
    var totalPrice = 0;
    for (var i = 0; i < products.length; i++) {
      var price = Number(products[i].price);
      totalPrice += price;
    }
    return totalPrice;
  };
}

var shoppingBag = new ShoppingBag([product1, product2, product3]);
console.log(shoppingBag);
console.log(shoppingBag.getInfo());
console.log(shoppingBag.avgPrice());
console.log(shoppingBag.getMostExpensive());
console.log(shoppingBag.calculateTotalPrice());

function PaymentCard(accBalance, status, date) {
  this.accBalance = accBalance.toFixed(2);
  this.status = status;
  this.date = date;
  this.checkoutAndBuy = function () {
    var string;
    console.log(shoppingBag.calculateTotalPrice());
    if (this.accBalance >= shoppingBag.calculateTotalPrice()) {
      string = `Purchase is successful`;
    } else {
      var missing = shoppingBag.calculateTotalPrice() - this.accBalance;
      string = `Purchase fail missing ${missing}`;
    }
    return string;
  };
}
var paymentCard = new PaymentCard(10.67, "inactive", 20 / 21 / 2021);
console.log(paymentCard);
console.log(paymentCard.checkoutAndBuy());
