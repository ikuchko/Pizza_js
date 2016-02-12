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
     var topping = new Topping("Pre-Cooked Bacon Pieces");
     var firstCheese = new Cheese("Parmesan");
     var secondCheese = new Cheese("Swiss");
     var salad = new Salad("Beets");
     var dressing = new Dressing("Beets");
     pizza.toppings.push(topping);
     pizza.cheeses.push(firstCheese);
     pizza.cheeses.push(secondCheese);
     pizza.salads.push(salad);
     pizza.dressings.push(dressing);
     expect(pizza.pizzaCost()).to.equal(23.99);

  });
});

describe('Topping', function() {
    it("creates a new topping object with the given properties", function() {
      var topping = new Topping("Pre-Cooked Bacon Pieces");
      expect(topping.toppingName).to.equal("Pre-Cooked Bacon Pieces");
   });
});

describe('Cheese', function() {
    it("creates a new chesse object with the given properties", function() {
      var cheese = new Cheese("Parmesan");
      expect(cheese.cheeseName).to.equal("Parmesan");
   });
});

describe('Salad', function() {
    it("creates a new salad object with the given properties", function() {
      var salad = new Salad("Beets");
      expect(salad.saladName).to.equal("Beets");
   });
});

describe('Dressing', function() {
    it("creates a new dressing object with the given properties", function() {
      var dressing = new Dressing("Beets");
      expect(dressing.dressingName).to.equal("Beets");
   });
});
