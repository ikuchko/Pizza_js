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
    case "One meter long": cost += 18;
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

var fillResultForm = function(order) {
  $(".total-form").append($());
}

$(document).ready(function() {
  var pizza = new Pizza;
  $(".name-form").submit(function(event) {
    event.preventDefault();
      var order = new Order($("#customer").val(), parseInt($("#pizzaAmount").val()));
      $('#name-block').hide();
      $('#ingredients-block').show();
  });

  $("#ingredients-back").click(function() {
    $('#ingredients-block').hide();
    $('#name-block').show();
  });

  $("#ingredients-submit").click(function() {
      pizza.pizzaSize = $("#pizza-size").val();
      pizza.toppings = $("#pizza-topping").val();
      pizza.cheeses = $("#pizza-cheese").val();
      pizza.salads = $("#pizza-salad").val();
      pizza.dressings = $("#pizza-dressing").val();
      $('#ingredients-block').hide();
      $('#result-block').show();
  });



  // $("form#play-again").submit(function(event) {
  //   location.reload(forceGet);
  // });
});
