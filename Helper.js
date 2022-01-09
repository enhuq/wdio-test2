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

    isPalindrome(str) {
      if (str) {
        str = str.toLowerCase();
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
          if (str[i] !== str[len - 1 - i]) {
              return ' is not a palindrome';
          }
        } 
        return ' is a palindrome';
      } else {
        return 'empty is not a valid input'
      }
  }

}

module.exports = new Helper();