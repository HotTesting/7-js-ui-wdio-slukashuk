/**
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 - Use mocha before/after hooks to reuse pre/post conditions
 - Use ChaiJS to make assertions
 */

// Each implemented test gives you 15 points (max total - 45)

const chai = require("chai"),
  expect = chai.expect;

chai.use(require("chai-sorted"));

before(function () {
  browser.url('/')
  this.searcField = $('input[type="search"]');
})

describe("Items search", function () {
  it("should show results in case multiple items matches", function () {
    this.searcField.setValue('duck');
    this.searcField.addValue('Enter');
    expect($('.products').isDisplayed()).to.equal(true,
      'Searched items must be visible, but it doesnt'
    );
  });

  it("should redirect to item page in case only one result matches", function () {
    this.searcField.setValue('Blue');
    this.searcField.addValue('Enter');
    expect($('h1.title').getText()).to.equal('Blue Duck');
  });

  it("should redirect to 'no matching results' in case no items matched", function () {
    this.searcField.setValue('Green');
    this.searcField.addValue('Enter');
    expect($('div>em').getText()).to.equal('No matching results');
  });
});

// Each implemented test gives you 20 points (max total - 40)
describe("Search results sorting", function () {
  before(function () {
    this.searcField.setValue('duck');
    this.searcField.addValue('Enter');
  })

  it("correctly arranges items when using 'by price' sorting", function () {
    $('a[href*="price"]').click();

    const allDucks = $$('.product');
    const duckPrices = allDucks.map(price => parseInt(price.getAttribute('data-price')));
    expect(duckPrices).to.be.sorted({ descending: false });
    let sorted = true;

    for (let i = 0; i < duckPrices.length - 1; i++) {
      if (duckPrices[i] > duckPrices[i + 1]) {
        sorted = false;
        break;
      }
    }
    expect(sorted).to.be.true;
  });

  it("correctly arranges items when using 'by name' sorting", function () {
    $('a[href*="name"]').click();
    const allDucks = $$('.product');
    const duckNames = allDucks.map(name => name.getAttribute('data-name'));
    expect(duckNames).to.be.sorted({ descending: false });
  });
});

// BONUS LEVEL - this test gives you 15 points
describe("Contact us form", function () {
  it("must send messages to shop administration", function () {
    $('.customer-service').click();
    $('input[name = "name"]').setValue('Svetlana');
    $('[name="contact_form"] input[name="email"]').setValue('lukashuk.svetlana@gmail.com');
    $('input[name = "subject"]').setValue('SMS');
    $('textarea[name = "message"]').setValue(`Hello, it's me!`);
    $('button[name="send"]').click();
    expect($('.alert-success').isDisplayed()).to.equal(true);
  });
});