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

    get saveButtonPhone() { return $('button.SubmitButton.PhoneNumberForm-SubmitButton.Button') };

    get saveButtonPhone() { return $('button.SubmitButton.PhoneNumberForm-SubmitButton.Button') };

    get phoneElementAfterSave() { return $('div[data-testid="PhoneNumberSection"]') };

    get editAddressIcon() { return $('div[data-testid="AddressSection"]>div>button') };

    get txtboxAddressLine1() { return $('input[name="addressLine1"]') };

    get txtboxZipCode() { return $('label[data-testid="Address-zipCode"]>div:nth-child(2)>div>input') };

    get txtboxCity() { return $('input[name="city"]') };

    get txtboxState() { return $('input[name="region"]') };

    get countryDropdown() { return $('div[class="DropdownInput-container"]>select[data-testid="DropdownInput-country"]') };

    get saveButtonAddress() { return $('button.SubmitButton.AddressForm-SubmitButton.Button') };

    get savedAddressElement() { return $('div[data-testid="AddressSection"]>div:nth-child(2)>p') };

    get editDOBIcon() { return $('div[data-testid="BirthDateSection"]>div>button') };

    get dayField() { return $('input[placeholder="DD"]') };

    get monthField() { return $('input[placeholder="MM"]') };

    get yearField() { return $('input[placeholder="YYYY"]') };

    get saveButtonDOB() { return $('button.SubmitButton.BirthDate-SubmitButton.Button') };

    get savedDOBElement() { return $('div[data-testid="BirthDateSection"]>div:nth-child(2)>p') };

    get editNationalityIcon() { return $('div[data-testid="NationalitySection"]>div>button') };

    get nationalityDropdown() { return $('div[class="DropdownInput-container"]>select[name="nationality"]') };

    get saveButtonNationality() {return $('button.SubmitButton.BirthDate-SubmitButton.Button') };  //wrong element

    get savedNationalityElement() {return $('div[data-testid="NationalitySection"]>div:nth-child(2)>p') };  

    async clickPhoneEditIcon() {

        await ElementUtil.doClick(this.editPhoneIcon);

    }

    async selectPhoneCountryCode(country) {

        await this.phoneDropdown.selectByVisibleText(country);

    }

    async clearAndFillPhoneNumber(number) {

        await ElementUtil.doClearAndAddValue(this.phoneTextbox, number);

    }

    async clickSaveButtonPhone() { 

        await ElementUtil.doClick(this.saveButtonPhone);

    }

    async clickAddressEditIcon() {

        await ElementUtil.doClick(this.editAddressIcon);

    }

    async clearAndFillAddressLine1(line1) {

        await browser.pause(1000);

        await ElementUtil.doClearAndAddValue(this.txtboxAddressLine1, line1);

    }

    async clearAndFillZipCode(code) {

        ElementUtil.doClearAndAddValue(this.txtboxZipCode, code);

    }

    async clearAndFillCity(city) {

        ElementUtil.doClearAndAddValue(this.txtboxCity, city);

    }

    async clearAndFillState(state) {

        ElementUtil.doClearAndAddValue(this.txtboxState, state);

    }

    async selectCountry(country) {

        await this.countryDropdown.selectByVisibleText(country);

    }

    async clickSaveButtonAddress() { 

        await ElementUtil.doClick(this.saveButtonAddress);

    }

    async clickDOBEditIcon() {

        await ElementUtil.doClick(this.editDOBIcon);

    }

    async clearAndFillDay(value) {

        ElementUtil.doClearAndAddValue(this.dayField, value);

    }

    async clearAndFillMonth(value) {

        ElementUtil.doClearAndAddValue(this.monthField, value);

    }

    async clearAndFillYear(value) {

        ElementUtil.doClearAndAddValue(this.yearField, value);

    }

    async clickSaveButtonDOB() { 

        await ElementUtil.doClick(this.saveButtonDOB);

    }

    async clickNationalityIcon() {

        await ElementUtil.doClick(this.editNationalityIcon);

    }

    async selectNationality(value) {

        await this.nationalityDropdown.selectByVisibleText(value);

    }

    async clickSaveButtonNationality() { 

        await ElementUtil.doClick(this.saveButtonNationality);

    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open(pageToOpen) {

        return super.open(pageToOpen);
   
    }

}

module.exports = new Profile();