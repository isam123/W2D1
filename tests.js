describe("sum", function() {

  it("sums the items in the given array by using HOC", function() {
    assert.equal(sum([12,3,4,6]), 25);
    
  });

});

describe("Multiply", function() {

    it("Multiplies the items in the given array by using HOC", function() {
      assert.equal(Multiply([1,2,3,4]), 24);
    });
  
  });

describe("reverse", function() {

it("reverse the given string by using HOC", function() {
   assert.equal(reverse("12346"), 64321);
});

});

describe("filterLongWords", function() {

    it("reverse the given string by using HOC", function() {
       assert.equal(filterLongWords(["isam","dss","weww","sd"],2), ["isam", "dss", "weww"]);
    });
    
    });