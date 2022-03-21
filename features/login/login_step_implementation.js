/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    openIncognitoWindow
} = require('taiko');
const assert = require("assert");
const LoginPageActions = require('./login');

step("Open SmartOffice web application", async function () {
    await goto("https://sr1.genband.com/smartOffice-manualsv/debug.html",{ waitForEvents: ['loadEventFired'] });
    // await openIncognitoWindow('https://sr1.genband.com/smartOffice-manualsv/debug.html', { name: 'windowName' });
});

step("User should pass startapp screen with CIM user <arg0>", async function(arg0) {
    try {
       await LoginPageActions.typeUsername(arg0);
       await LoginPageActions.clickButton('NEXT');
    } catch (error) {
        console.log(error);
    }
});

step("User should see typed CIM <arg0> user in username area in the login page", async function (arg0) {
    try {
        await LoginPageActions.getUserNameValueAndCheck(arg0);
    } catch (error) {
        console.log(error)
    }
});
step("User should redirect to Home page", async function () {
    try {
        await LoginPageActions.isRedirectedHomePage();
    } catch (error) {
        console.log(error)
    }
});


step("User types paswword <arg0>", async function(arg0) {
    try {
        await LoginPageActions.typePassword(arg0);
    } catch (error) {
        console.log(error)
    }
});

step("User clicks login button", async function() {
    try {
        await LoginPageActions.clickButton('LOGIN');
    } catch (error) {
        console.log(error)
    }
});

step("User logout succesfully", async function() {
	await LoginPageActions.clickProfileIcon();
	await LoginPageActions.clickLogout();

});