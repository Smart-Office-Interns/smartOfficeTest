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

async function typeUsername(username) {
    try {
        await write(username, into(textBox({ id: 'startup-login-input-username' })));
    } catch (error) {
        console.error(error);
    }
}

async function clickNextButton() {
    try {
        await click('Next', { waitForEvents: ['loadEventFired'] })
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    typeUsername,
    clickNextButton
}
