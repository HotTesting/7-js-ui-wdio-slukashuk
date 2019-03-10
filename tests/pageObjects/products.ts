export class products {

    searchForItem(itemName) {
        const searcField = $('input[type="search"]');
        searcField.setValue(itemName);
        searcField.addValue('Enter');
        $('.btn-success').waitForDisplayed(3000);
    }

    addProductToCart(){
        $('.btn-success').waitForDisplayed(3000);
        $('.btn-success').click();
        browser.pause(3000);
    }
    
}
export const Products = new products();