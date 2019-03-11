/**
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() NOT allowed, use browser.wait, browser.waitUntil
 - You SHOULD use PageObjects for this tests
 - prefer css selectors
 - Use mocha before/after hooks to reuse pre/post conditions
 - Use ChaiJS to make assertions
 */

// Each implemented test gives you 20 points
import { expect } from "chai";
import { Products } from "./pageObjects/products";
import { ShoppingCart } from "./pageObjects/shoppingCart";
import {MainPage} from "./pageObjects/mainPage";

before(function () {
    browser.url('/');
    browser.pause(3000);
})

describe("Cart", function () {
    it.only("adding one item to cart should be successful", function () {
        Products.searchForItem('purple');
        Products.addProductToCart();
        ShoppingCart.openCart();
        expect($('.item[data-name = "Purple Duck"]').isDisplayed()).to.equal(true);
    });

    it("removing one item from cart should be successful", function () {
        ShoppingCart.removeProductFromCart();
        expect($('.item[data-name = "Purple Duck"]').isDisplayed()).to.equal(false);
    });

    // from 1 to 2
    it("increasing item quantity in cart should be successful", function () {
        browser.url('/');
        Products.searchForItem('purple');
        Products.addProductToCart();
        ShoppingCart.openCart();
        ShoppingCart.increaseItems();
        const itemsCount = ShoppingCart.getQuantity();
        expect(itemsCount).to.equal(2);
    });

    // from 2 to 1
    it("decreasing item quantity in cart should be successful", function () {
        ShoppingCart.decreaseItems();
        const itemsCount = ShoppingCart.getQuantity();
        expect(itemsCount).to.equal(1);
    });
});

describe("Prices", function () {
    it("can be switched to EUR", function () {
        browser.url('/');
        MainPage.changeCurrencyToEUR();
        const currency = MainPage.getCurrentCurrency();
        expect(currency).to.contain("EUR");
    });
});