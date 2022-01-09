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

    await Profile.clickSaveButton();

    await expect(Profile.phoneElementAfterSave).toBeExisting();
  
  });

  it('Palindrone test', async () => {

    var strArray = ['Madam', '12321', 'Wunderflats', '', 'malayalam'];

    for (let i=0; i<strArray.length; i++) {

      console.log(strArray[i], Helper.isPalindrome(strArray[i]));

    }
  
  });


});