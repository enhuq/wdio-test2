class ElementUtil {

    async doClick(element) {

        await element.waitForClickable( {timeout: 6000} );

        await element.click();

    }

    async doClearValue(element) {

        await element.waitForDisplayed( {timeout: 6000} );

        await element.click();

        await element.clearValue();

    }


    async doAddValue(element, value) {

        await element.waitForDisplayed( {timeout: 10000} );

        await element.clearValue();

        await element.addValue(value);

    }

    async doGetText(element) {

        await element.waitForDisplayed( {timeout: 6000} );

        return element.doGetText();

    }

    async doIsDisplayed(element) {

        await element.waitForDisplayed( {timeout: 6000} );

        return element.isDisplayed();

    }

    async doGetPageTitle() {

        return browser.getPageTitle();

    }

}

module.exports = new ElementUtil();