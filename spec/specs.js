describe('Pizza', function() {
  it("creates a new pizza object with the given properties", function() {
    var pizza = new Pizza("small");
    expect(pizza.pizzaSize).to.equal("small");
    expect(pizza.toppings).to.eql([]);
    expect(pizza.cheeses).to.eql([]);
    expect(pizza.salads).to.eql([]);
    expect(pizza.dressings).to.eql([]);
 });

 it("returns pizza cost", function() {
   var pizza = new Pizza("small");
   pizza.toppings = ["Pre-Cooked Bacon Pieces"];
   pizza.cheeses = ["Parmesan", "Swiss"];
   pizza.salads = ["Beets"];
   pizza.dressings = ["Calzone Sub Sauce"];
   expect(pizza.pizzaCost()).to.equal(24);
  });
});

describe('Order', function() {
  it("creates a new order object with the given properties", function() {
    var order = new Order("Cheburashka");
    expect(order.customer).to.equal("Cheburashka");
    expect(order.pizzas).to.eql([]);
  });

  it("return total cost for whole customer order", function() {
    var order = new Order("Strugatski")
    var firstPizza = new Pizza("small");
    firstPizza.toppings = ["Pre-Cooked Bacon Pieces"];
    firstPizza.cheeses = ["Parmesan", "Swiss"];
    firstPizza.salads = ["Beets"];
    firstPizza.dressings = ["Calzone Sub Sauce"];
    var secondPizza = new Pizza("large");
    secondPizza.toppings = ["Pre-Cooked Bacon Pieces"];
    secondPizza.cheeses = ["Parmesan", "Swiss"];
    secondPizza.salads = ["Beets"];
    secondPizza.dressings = ["Calzone Sub Sauce"];
    order.pizzas.push(firstPizza);
    order.pizzas.push(secondPizza);
    expect(order.totalCost()).to.equal(51.99)
  });
});
