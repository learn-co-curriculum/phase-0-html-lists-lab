const { expect } = require("chai");

describe("index.html", () => {
  it("contains a <ul> tag", () => {
    // find the first <ul> in the HTML file
    const ul = document.querySelector("ul");
    expect(ul).to.exist;
  });
  describe("the <ul> tag", () => {
    it("has three child <li> tags with the correct content", () => {
      // find all direct child <li> elements in the <ul>
      const ul = document.querySelector("ul");
      const lis = ul.children;
      expect(lis).to.have.lengthOf(
        3,
        "the <ul> should have three <li> elements"
      );
      expect(lis[0].tagName).to.eq("LI");
      expect(lis[0].textContent).to.contain("2 slices of bread");
      expect(lis[1].textContent).to.contain("4 slices of cheese");
      expect(lis[2].textContent).to.contain("1 tbsp of butter");
    });

    it("contains a nested <ul> tag within a <li>", () => {
      // find a <ul> nested inside a <li> nested inside a <ul>
      const nestedUl = document.querySelector("ul > li > ul");
      expect(nestedUl).to.exist;
    });

    describe("the nested <ul>", () => {
      it("contains three <li> tags with the correct content", () => {
        const nestedLis = document.querySelectorAll("ul > li > ul > li");
        expect(nestedLis).to.have.length(
          3,
          "Make sure to list out the three cheese types in the nested list"
        );
      });
    });
  });
  it("contains a <ol> tag", () => {
    // find the first <ol> in the HTML file
    const ol = document.querySelector("ol");
    expect(ol).to.exist;
  });
  describe("the <ol> tag", () => {
    it("has five child <li> tags with the correct content", () => {
      // find all direct child <li> elements in the <ul>
      const ol = document.querySelector("ol");
      const lis = ol.children;
      expect(lis).to.have.lengthOf(
        5,
        "the <ol> should have five <li> elements"
      );
      expect(lis[0].tagName).to.eq("LI");
      expect(lis[0].textContent).to.contain(
        "Spread butter on bread and frying pan"
      );
      expect(lis[1].textContent).to.contain(
        "Place bread in frying pan and fry"
      );
      expect(lis[2].textContent).to.contain("Add cheese on top of bread");
      expect(lis[3].textContent).to.contain("Cover with second slice of bread");
      expect(lis[4].textContent).to.contain("Turn over and fry for 2 minutes");
    });
  });
});
