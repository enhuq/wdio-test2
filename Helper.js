/**
 * sub page containing specific selectors and methods for a specific page
 */

class Helper {

    generateRandomString(howManyChars) {

        return Math.random().toString(36).substr(2, howManyChars);   //Returns exactly 'howManyChars' random characters

    }

    generateRandomStringWithoutNumbers(length) {
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       return result;
    }

    genreateRandomNumbers(length) {
        var result           = '';
        var characters       = '0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       return result;

    }

    justNumbers(str) {

        var numStr = str.replace(/[^0-9]/g, '');

        return parseInt(numStr);

    }

}

module.exports = new Helper();