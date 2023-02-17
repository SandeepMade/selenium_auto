const FitPeo = require('../pageobjects/fitPeo.page.js');
const LoginPage = require('../pageobjects/login.page.js');
var assert = require('chai').assert;
describe('FILTERS Scenarios', () => {
    it('1. open Flipkart 2,type ipad, 3 suggestion product ', () => {
        // application url in login.pages.js
        LoginPage.open()
        LoginPage.cancelButton.click()
        // search product code is in login.pages.js
        LoginPage.SearchProduct("IPAD")
        // suggestion product
        browser.pause(1000)
        var suggestedItems = $$('//ul/li[@class="Y5N33s"]/div/a/div[2]')
        // assert.isTrue(suggestedItems.isDisplayed())
        for (let i = 0; i <= suggestedItems.length; i++) {
            console.log(suggestedItems[i].getText())
            if (suggestedItems[i].getText() == "9th generation" || suggestedItems[i].getText() == "8th generation") {
                suggestedItems[i].click()
                break;
            } else {
                console.log("latest version are not suggesting")
                suggestedItems[1].click()
            }

        }
    });
    it('4.on results page filter all results with online only ', () => {
        if (LoginPage.onlineOnlyFilter.isDisplayed() == true) {
            // onlineOnlyFilter code is in login.pages.js
            LoginPage.onlineOnlyFilter.scrollIntoView();
            assert.isTrue(onlineOnlyFilter.isClickable())
            LoginPage.onlineOnlyFilter.click()
        } else if (LoginPage.excludeOutOfStock.isDisplayed() == true) {
            LoginPage.excludeOutOfStock.scrollIntoView();
            assert.isTrue(excludeOutOfStock.isClickable())
            LoginPage.excludeOutOfStock.click()
        }
    });
    it('5, select one of the result navigate to checkout order ', () => {
        var firstItem = $("//div[@class='_1YokD2 _2GoDe3']/div[@class='_1YokD2 _3Mn1Gg']/div[1]")
        var TotalProductList = $$("//div[@class='_1YokD2 _2GoDe3']/div[@class='_1YokD2 _3Mn1Gg']/div")
        if (firstItem.isDisplayed() == true) {
            for (let i = 0; i <= TotalProductList.length; i++) {
                console.log("list of item " + TotalProductList[i].getText())
                var cHandle = browser.getWindowHandle();
                console.log("previuos handle" + cHandle)
                TotalProductList[1].click();
                var cHandles = browser.getWindowHandles();
                console.log("next window handle" + cHandles)
                browser.pause(8000)
                var newHandle;
                for (let i = 0; i <= cHandles.length; i++) {
                    if (cHandles[i] != cHandle) {
                        newHandle = cHandles;
                    }
                }
                console.log("new" + newHandle)
                browser.switchToWindow(cHandles[1])
                break;
            }
        } else {
            console.log("Sorry, no results found!r ")
        }
    });
    it('6, checkout the order 7place order ', () => {
        var CheckoutButton = LoginPage.checkOut;
        CheckoutButton.scrollIntoView();
        if (CheckoutButton.isDisplayed() == true) {
            console.log(LoginPage.itemDescription.getText())
            CheckoutButton.click()
            browser.pause(5000)
            LoginPage.pLaceOrder.click()
            browser.pause(2000)
        } else {
            console.log("had issue with selected item")
        }

    });
    it('8, Enter Random email or mobile to place order ', () => {
        if (LoginPage.enterRandomMobile.isDisplayed() == true) {
            function generateRandomMobileNumber() {
                const areaCode = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
                const prefix = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
                const lineNum = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
                return ` ${areaCode}-${prefix}-${lineNum}`;
            }
            LoginPage.enterRandomMobile.setValue(generateRandomMobileNumber)
            LoginPage.continueButton.click()
            browser.pause(5000)

        } else {
            console.log("had issue with selected item")
        }
    });
});