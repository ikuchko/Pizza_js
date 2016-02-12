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
    case "small": cost += 8;
      break;
    case "medium": cost += 10;
      break;
    case "large": cost += 12;
      break;
    case "footlong": cost += 18;
      break;
  }
  for (var i in this.toppings) {
    cost += 5;
  }
  for (var i in this.cheeses) {
    cost += 4;
  }
  for (var i in this.toppings) {
    cost += 2;
  }
  for (var i in this.toppings) {
    cost += 1;
  }
  return cost -= 0.01;
}

function Order (customer, pizzaAmount) {
  this.customer = customer;
  this.pizzaAmount = pizzaAmount;
  this.pizzas = [];
}

function Topping (toppingName) {
  this.toppingName = toppingName;
}

function Cheese (cheeseName) {
  this.cheeseName = cheeseName;
}

function Salad (saladName) {
  this.saladName = saladName;
}

function Dressing (dressingName) {
  this.dressingName = dressingName;
}
