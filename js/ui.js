var fillOrderForm = function(order) {
  $("#total-form").append($("<div id='result'>"))
    for (var i in order.pizzas) {
      $("#result").append($("<p><strong>" + order.pizzas[i].pizzaSize + "</strong></p>"));
      for (var toppingId in order.pizzas[i].toppings) {
        $("#result").append($("<span> ♦ " + order.pizzas[i].toppings[toppingId] + "</span>"));
      }
      for (var cheeseId in order.pizzas[i].cheeses) {
        $("#result").append($("<span> ♦ " + order.pizzas[i].cheeses[cheeseId] + "</span>"));
      }
      for (var saladId in order.pizzas[i].salads) {
        $("#result").append($("<span> ♦ " + order.pizzas[i].salads[saladId] + "</span>"));
      }
      for (var dressingId in order.pizzas[i].dressings) {
        $("#result").append($("<span> ♦ " + order.pizzas[i].dressings[dressingId] + "</span>"));
      }
      $("#result").append($("<span> ♦ </span>"));
      $("#result").append($("<p class='cost'><strong>Price: $" + order.pizzas[i].pizzaCost() + "</strong></p>"));
      $("#result").append($("<hr>"));
    }
    $("#total-form").append($("</div>"));
}

var fillTotalCostForm = function (order) {
  var size = ["Small", "Medium", "Large", "One meter long"];
  $("#total-form").append($("<div id='result'>"))
  for (var i in size) {
    if (order.totalAmount(size[i]) != 0) {
      $("#result").append("<p>" + size[i] + " size: " + order.totalAmount(size[i]) + "</p>");
    }
  }
  $("#result").append("<h4>Total cost: $" + order.totalCost() + "</h4>")
                  .append("<h4>Thank you for your order, " + order.customer + "!</h4>")
                  .append("<br>")
                  .append('<button type="submit" class="btn btn-danger" id="new-order">New order</button>');
  $("#total-form").append($("</div>"));
}

$(document).ready(function() {
  var order;
  $(".name-form").submit(function(event) {
    event.preventDefault();
      order = new Order($("#customer").val());
      $('#name-block').hide();
      $('#ingredients-block').show();
      $('#result-block').show();
  });

  $("#ingredients-back").click(function() {
    $('#ingredients-block').hide();
    $('#result-block').hide();
    $('#name-block').show();
  });

  $("#ingredients-submit").click(function() {
    var pizza = new Pizza;
    pizza.pizzaSize = $("#pizza-size").val();
    pizza.toppings = $("#pizza-topping").val();
    pizza.cheeses = $("#pizza-cheese").val();
    pizza.salads = $("#pizza-salad").val();
    pizza.dressings = $("#pizza-dressing").val();
    order.pizzas.push(pizza);
    $("#result").remove();
    fillOrderForm(order);
    $("#order-submit").show();
  });

  $("#order-submit").click(function() {
    if (order.totalCost() != -0.01) {
      $("#result").remove();
      fillTotalCostForm(order);
      $("#order-submit").hide();
    }
    $("#new-order").click(function() {
      location.reload();
    });
  });

});
