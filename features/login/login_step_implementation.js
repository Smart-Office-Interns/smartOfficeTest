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
    evaluate
} = require('taiko');
const assert = require("assert");
const { typeUsername } = require('./login');

step("Open SmartOffice web application", async function () {
    // await goto("todo.taiko.dev");
    await goto("https://sr1.genband.com/smartOffice-manualsv/debug.html");
});

step("User should pass startapp screen with CIM user <arg0>", async function(arg0) {
    try {
       await typeUsername(arg0);
       await clickNextButton();
    } catch (error) {
        console.log(error)
    }
});
step("User should see typed CIM user in username area in the login page", async function() {
    throw 'Unimplemented Step';
});
step("User should redirect to Home page", async function() {
    throw 'Unimplemented Step';
});