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
    openTab,
    openIncognitoWindow
} = require('taiko');
const assert = require("assert");
const LoginPageActions = require('./login');

step("Open SmartOffice web application", async function() {
    await openTab({ name: 'genband' });
    await goto("https://sr1.genband.com/smartOffice-manualsv/debug.html", { waitForEvents: ['loadEventFired'] });
});
step("User should pass startapp screen with CIM user <arg0>,<arg1>,<arg2>", async function(arg0, arg1, arg2) {
    try {
        await LoginPageActions.typeElement(arg0);
        await LoginPageActions.clickButton('NEXT');
        await LoginPageActions.getUserNameValueAndCheck(arg2);
        await LoginPageActions.typeElement(arg1);
        await LoginPageActions.clickButton('LOGIN');
        await LoginPageActions.isRedirectedHomePage();
    } catch (error) {
        console.log(error);
    }
});
step("User should pass startapp screen with CIM user <username>", async function(username) {
    try {
        await LoginPageActions.typeElement(username);
        await LoginPageActions.clickButton('NEXT');
    } catch (error) {
        console.log(error);
    }
});

step("User should see typed CIM <username> user in username area in the login page", async function(username) {
    try {
        await LoginPageActions.getUserNameValueAndCheck(username);
    } catch (error) {
        console.log(error)
    }
});
step("User should redirect to Home page", async function() {
    try {
        await LoginPageActions.isRedirectedHomePage();
    } catch (error) {
        console.log(error)
    }
});
step("User types paswword <password>", async function(password) {
    try {
        await LoginPageActions.typeElement(password);
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