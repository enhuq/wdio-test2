1.	After checking out the code, run command: npm install
2.	Run test file by command: npx wdio run wdio.conf.js while you are in the wdio-test2 folder
3.	Four test cases are added in ProfileTest.js. They are:
    1.	User should be able to add a phone number
    2.	User should be able to add an address
    3.	User should be able to add DOB
    4.	User should be able to add Nationality. This test case is not working as there is a bug/error on Save button. 
4.	There is one more test case which is to login to the application. This is in BeforeSuite which is in: wdio.conf.js
5.	There are a lot of hard waits in the test. Without those it’s hard to work. I did not have much time to research on it
6.	The Palindrome test is also added at the end of the test file
7. Tests may still be fragile


