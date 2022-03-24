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

step("Click <button> button", async (button) => {
    try {
    await click(button,{waitForEvents:['loadEventFired']}) 
        
    } catch (error) {
        console.error(error);
    }
    // await press('Enter');
});