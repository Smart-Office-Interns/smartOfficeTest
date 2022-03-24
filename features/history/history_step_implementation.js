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
const HistoryActions = require('./history');
const CommonActions = require('../common/common');

step("The user sees old history records", async function() {
    try {
        await HistoryActions.clickHistoryIcon();
        await CommonActions.wait(3000);
     } catch (error) {
         console.log(error);
     }
});