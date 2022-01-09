const { locatorStragey } = require('query-selector-shadow-dom/plugins/webdriverio');
const ElementUtil = require('../util/ElementUtil');
const Page = require('./Page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login extends Page {
    /**
     * define selectors using getter methods
     */   

    get txtboxEmail() { return $('input[name="email"][placeholder=Email]') };

    get btnContunue() { return $('div=Continue') };

    get txtboxPassword() { return $('input[name="password"][placeholder=Password]') };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginToTheApplication(username, password) {

        await ElementUtil.doAddValue(this.txtboxEmail, username); 

        await ElementUtil.doClick(this.btnContunue);

        await ElementUtil.doAddValue(this.txtboxPassword, password);

        await ElementUtil.doClick(this.btnContunue);

        await browser.pause(3000);

    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open(pageToOpen) {

         return super.open(pageToOpen);

    }
}

module.exports = new Login();