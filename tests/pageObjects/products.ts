export class products {

    searchForItem(itemName) {
        const searcField = $('input[type="search"]');
        searcField.setValue(itemName);
        searcField.addValue('Enter');
        $('.btn-success').waitForDisplayed(3000);
    }

    addProductToCart() {
        $('.btn-success').waitForDisplayed(3000);
        $('.btn-success').click();
        let quantity = $('.quantity')
        browser.waitUntil(()=> {
            return Number(quantity.getText()) === 1;
        }, 4000, 'some message', 100);

    }
}
export const Products = new products();