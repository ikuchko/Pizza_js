describe('Pizza', function() {
  it("creates a new pizza object with the given properties", function() {
    var pizza = new Pizza("small");
    expect(pizza.pizzaSize).to.equal("small");
    expect(pizza.toppings).to.eql([]);
    expect(pizza.cheeses).to.eql([]);
    expect(pizza.salads).to.eql([]);
    expect(pizza.dressings).to.eql([]);
 });

 it("returns final cost of pizza", function() {
   var pizza = new Pizza("small");
   pizza.toppings = ["Pre-Cooked Bacon Pieces"];
   pizza.cheeses = ["Parmesan", "Swiss"];
   pizza.salads = ["Beets"];
   pizza.dressings = ["Beets"];
   expect(pizza.pizzaCost()).to.equal(23.99);
  });
});

describe('Pizza', function() {
  it("creates a new order object with the given properties", function() {
    var order = new Order("Cheburashka", 2);
    expect(order.customer).to.equal("Cheburashka");
    expect(order.pizzaAmount).to.equal(2);
    expect(order.pizzas).to.eql([]);
  });
});


// describe('Topping', function() {
//   it("creates a new topping object with the given properties", function() {
//     var topping = new Topping("Pre-Cooked Bacon Pieces");
//     expect(topping.toppingName).to.equal("Pre-Cooked Bacon Pieces");
//  });
// });
//
// describe('Cheese', function() {
//   it("creates a new chesse object with the given properties", function() {
//     var cheese = new Cheese("Parmesan");
//     expect(cheese.cheeseName).to.equal("Parmesan");
//  });
// });
//
// describe('Salad', function() {
//   it("creates a new salad object with the given properties", function() {
//     var salad = new Salad("Beets");
//     expect(salad.saladName).to.equal("Beets");
//  });
// });
//
// describe('Dressing', function() {
//   it("creates a new dressing object with the given properties", function() {
//     var dressing = new Dressing("Beets");
//     expect(dressing.dressingName).to.equal("Beets");
//  });
// });
