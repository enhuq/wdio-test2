const Login = require('../pageobjects/Login');
const Profile = require('../pageobjects/Profile');
const WdioConfig = require('../../wdio.conf');
const Helper = require('../../Helper');
const CommonElements = require('../util/ElementUtil');
const { selectPhoneCountry } = require('../pageobjects/Profile');

describe('WUNDERFLATS: ', () => {

  it('User should be able to add a phone number', async () => {

    await Profile.open('en/account/profile');

    await Profile.clickPhoneEditIcon();
  
    await Profile.selectPhoneCountryCode('Canada');

    const randomPhoneNumber = '5147' + Helper.genreateRandomNumbers(6);

    await Profile.clearAndFillPhoneNumber(randomPhoneNumber);

    await Profile.clickSaveButtonPhone();

    await expect(Profile.phoneElementAfterSave).toBeExisting();
  
  });

  it('User should be able to add address', async () => {

    await Profile.open('en/account/profile');

    await Profile.clickAddressEditIcon();

    await Profile.clearAndFillAddressLine1('1234 Aland Road');

    await browser.pause(3000);

    await Profile.clearAndFillZipCode('9');

    await browser.pause(3000);

    await Profile.clearAndFillCity('Bonn');

    await browser.pause(3000);

    await Profile.clearAndFillState('NRW');

    await browser.pause(3000);

    const country = 'Germany';

    await Profile.selectCountry(country);

    await browser.pause(3000);

    await Profile.clickSaveButtonAddress();

    await browser.pause(3000);

    await expect(Profile.savedAddressElement).toBeDisplayed();

  });

  it('User should be able to add DOB', async () => {

    await browser.pause(3000);

    await Profile.open('en/account/profile');

    await browser.pause(3000);

    await Profile.clickDOBEditIcon();

    await browser.pause(3000);

    await Profile.clearAndFillDay('13');

    await browser.pause(3000);

    await Profile.clearAndFillMonth('10');

    await browser.pause(3000);

    await Profile.clearAndFillYear('1985');

    await browser.pause(3000);

    await Profile.clickSaveButtonDOB();

    await browser.pause(3000);

    await expect(Profile.savedDOBElement).toBeDisplayed();

    await browser.pause(3000);

  });

  //Save button is same as DOB Save button
  it('User should be able to add Nationality', async () => {

    await browser.pause(3000);

    await Profile.open('en/account/profile');

    await browser.pause(3000);

    await Profile.clickNationalityIcon();

    await browser.pause(3000);

    await Profile.selectNationality('Belgium');

    await browser.pause(3000);

    //await Profile.clickSaveButtonNationality();

    //await browser.pause(3000);

    //await expect(Profile.savedNationalityElement).toBeDisplayed();

  });

  it('Palindrone test', async () => {

    var strArray = ['Madam', '12321', 'Wunderflats', '', 'malayalam'];

    for (let i=0; i<strArray.length; i++) {

      console.log(strArray[i], Helper.isPalindrome(strArray[i]));

    }
  
  });

});