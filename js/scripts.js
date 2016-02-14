function Pizza (pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.cheeses = [];
  this.salads = [];
  this.dressings = [];
}

Pizza.prototype.pizzaCost = function () {
  var cost = 0.00;
  switch (this.pizzaSize) {
    case "Small": cost += 8;
      break;
    case "Medium": cost += 10;
      break;
    case "Large": cost += 12;
      break;
    case "One meter long": cost += 18;
      break;
  }
  for (var i in this.toppings) {
    cost += 5;
  }
  for (var i in this.cheeses) {
    cost += 4;
  }
  for (var i in this.salads) {
    cost += 2;
  }
  for (var i in this.dressings) {
    cost += 1;
  }
  return cost;
}

function Order (customer) {
  this.customer = customer;
  this.pizzas = [];
}

Order.prototype.totalCost = function() {
  var cost = 0;
  for (var i in this.pizzas) {
    cost += this.pizzas[i].pizzaCost();
  }
  return cost -= 0.01;
}

Order.prototype.totalAmount = function(size) {
  var amount = 0;
  for (var i in this.pizzas) {
    if (this.pizzas[i].pizzaSize === size) {
      amount += 1;
    }
  }
  return amount;
}
