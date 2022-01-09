const ElementUtil = require('../util/ElementUtil');
const Page = require('./Page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
 class Profile extends Page {
    /**
     * define selectors using getter methods
     */
    get profileTab() { return $('span=Profile') };
    
    get editPhoneIcon() { return $('div[data-testid="PhoneNumberSection"]>div>button') };

    get phoneDropdown() { return $('div[class="PhoneNumberInput"]>select[data-testid="PhoneNumberInput-select"]') };

    get phoneTextbox() { return $('input[data-testid="PhoneNumberInput-textInput"]') };

    get phoneTextboxHidden() { return $('input[data-testid="PhoneNumberInput-hiddenInput"]') };

    get saveButtonPhone() { return $('button.SubmitButton.PhoneNumberForm-SubmitButton.Button') };

    get saveButtonPhone() { return $('button.SubmitButton.PhoneNumberForm-SubmitButton.Button') };

    get phoneElementAfterSave() { return $('div[data-testid="PhoneNumberSection"]') };

    async clickPhoneEditIcon() {

        await ElementUtil.doClick(this.editPhoneIcon);

    }

    async selectPhoneCountryCode(country) {

        await this.phoneDropdown.selectByVisibleText(country);

    }

    async clearAndFillPhoneNumber(number) {

        await this.phoneTextbox.click();

        await browser.keys(['Meta', 'a']);

        await browser.keys(['Meta', 'x']);

        await this.phoneTextbox.setValue(number);

    }

    async clickSaveButton() { 

        await ElementUtil.doClick(this.saveButtonPhone);

    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open(pageToOpen) {

        return super.open(pageToOpen);
   
    }

}

module.exports = new Profile();