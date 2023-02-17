const Page = require('./page');
class LoginPage extends Page {

    get logIn() {
        return $('//a[contains(text(),"Login")]')
    }
    get enterMobNumber2() {
        return $('//input[@class="_2IX_2- VJZDxU"]')
    }
    get cancelButton() {
        return $('//div/div/button[contains(text(),"✕")]')
    }
    get insertType() {
        return $('//input[@placeholder="Search for products, brands and more"]')
    }
    get onlineOnlyFilter() {
        return $('//div[contains(text(),"Online Only")]')
    }
    get excludeOutOfStock() {
        return $('//div[contains(text(),"Exclude Out of Stock")]')
    }
    get checkOut() {
        return $('//button[@class="_2KpZ6l _2U9uOA _3v1-ww"]')
    }
    get itemDescription() {
        return $('//h1/span')
    }
    get pLaceOrder() {
        return $('//span[contains(text(),"Place Order")]')
    }
    get enterRandomMobile() {
        return $('//input[@type="text"]')
    }
    get continueButton() {
        return $('//span[normalize-space()="CONTINUE"]')
    }

    SearchProduct(Product) {
        this.insertType.clearValue()
        this.insertType.setValue(Product)
        this.insertType.click()
        browser.pause(5000)
    }
    generateRandomMobileNumber() {
        const areaCode = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
        const prefix = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
        const lineNum = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        return ` ${areaCode}-${prefix}-${lineNum}`;
    }
}
module.exports = new LoginPage();
