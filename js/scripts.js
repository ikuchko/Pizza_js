function Pizza (pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.cheeses = [];
  this.salads = [];
  this.dressings = [];
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
