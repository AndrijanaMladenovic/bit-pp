function Product(name, price, expiration) {
  this.productId = Math.floor(10000 + Math.random() * 9000);
  this.name = name;
  this.price = price.toFixed(2);
  this.expiration = expiration;
}
var product1 = new Product("banana", 200.23123123, "12.02.2024");

console.log(product1);

function Product(name, price, expiration) {
  this.productId = Math.floor(10000 + Math.random() * 9000);
  this.name = name;
  this.price = price.toFixed(2);
  this.expiration = expiration;
  this.getInfo = function () {
    var string = "";
    var name = Product.name.toUpperCase().slice(0, 2) + Product.productId;
    console.log(name);
  };
}
var product1 = new Product("banana", 200.23123123, "12.02.2024");

console.log(product1);
