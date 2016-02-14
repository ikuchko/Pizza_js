var fillResultForm = function(order) {
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
      $("#result").append($("<hr>"));
    }
    $("#total-form").append($("</div>"))
}

$(document).ready(function() {
  var order;
  $(".name-form").submit(function(event) {
    event.preventDefault();
      order = new Order($("#customer").val(), parseInt($("#pizzaAmount").val()));
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
    fillResultForm(order);
  });




  // $("form#play-again").submit(function(event) {
  //   location.reload(forceGet);
  // });
});
