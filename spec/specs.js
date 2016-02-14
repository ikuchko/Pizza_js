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
   var pizza = new Pizza("Small");
   pizza.toppings = ["Pre-Cooked Bacon Pieces"];
   pizza.cheeses = ["Parmesan", "Swiss"];
   pizza.salads = ["Beets", "Croutons", "Hyen"];
   pizza.dressings = ["Calzone Sub Sauce"];
   expect(pizza.pizzaCost()).to.equal(28);
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
    var firstPizza = new Pizza("Small");
    firstPizza.toppings = ["Pre-Cooked Bacon Pieces"];
    firstPizza.cheeses = ["Parmesan", "Swiss"];
    firstPizza.salads = ["Beets"];
    firstPizza.dressings = ["Calzone Sub Sauce"];
    var secondPizza = new Pizza("Large");
    secondPizza.toppings = ["Pre-Cooked Bacon Pieces"];
    secondPizza.cheeses = ["Parmesan", "Swiss"];
    secondPizza.salads = ["Beets"];
    secondPizza.dressings = ["Calzone Sub Sauce"];
    order.pizzas.push(firstPizza);
    order.pizzas.push(secondPizza);
    expect(order.totalCost()).to.equal(51.99)
  });

  it("determines amount of pizzas according to size", function() {
    var order = new Order("Strugatski")
    var firstPizza = new Pizza("Small");
    var secondPizza = new Pizza("One meter long");
    var thirdPizza = new Pizza("One meter long");
    order.pizzas.push(firstPizza);
    order.pizzas.push(secondPizza);
    order.pizzas.push(thirdPizza);
    expect(order.totalAmount("Small")).to.equal(1);
    expect(order.totalAmount("One meter long")).to.equal(2);
    expect(order.totalAmount("Large")).to.equal(0);
  });
});
