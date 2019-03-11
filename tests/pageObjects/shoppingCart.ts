export class shoppingCart {

    openCart(): any {
        $('#cart').click();
        browser.pause(3000);
    }

    removeProductFromCart(): any {
        $("button[name='remove_cart_item']").click();
        browser.pause(3000);
    }

    increaseItems(): any {
        const quantityInput = $('input[name*="quantity"]');
        const items = quantityInput.getValue();
        quantityInput.waitForDisplayed(4000);
        quantityInput.clearValue();
        const increasedItem = Number(items) + 1;
        return quantityInput.setValue(increasedItem);
    }

    decreaseItems(): any {
        const items = this.getQuantity();
        const quantityInput = $('input[name*="quantity"]');
        quantityInput.clearValue();
        $(".loader-wrapper").waitForDisplayed(undefined, true); // waiting when loader become disabled
        const decreasedItem = Number(items) - 1;
        return quantityInput.setValue(decreasedItem);
      }

    getQuantity(): number {
        const quantityInput = $('input[name*="quantity"]');
        quantityInput.waitForDisplayed(3000);
        return Number(quantityInput.getValue());
      }
}

export const ShoppingCart = new shoppingCart;