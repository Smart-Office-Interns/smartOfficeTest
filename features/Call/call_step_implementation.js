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
const callPageActions = require('./call');


step("Go to user B's page", async function() {
    try {
        await callPageActions.openNewTab();
    } catch (error) {
        console.log(error)
    }
});
step("Go to user A's page", async function() {
    try {
        await callPageActions.switchHomePageA();
    } catch (error) {
        console.log(error)
    }
});
step("User A click <username> avatar icon", async function(username) {
    try {
        await callPageActions.clickAvatarIcon(username);
    } catch (error) {
        console.log(error)
    }
});
step("User A click call icon", async function() {
    try {
        await callPageActions.clickAudioIcon();
    } catch (error) {
        console.log(error)
    }
});
step("User A click video icon", async function() {
    try {
        await callPageActions.clickVideoIcon();
    } catch (error) {
        console.log(error)
    }
});
step("User A should return to home page and approve permissions", async function() {
    try {
        await callPageActions.overridePermission();
    } catch (error) {
        console.log(error)
    }
});
step("Switch tab User B", async function() {
    try {
        await callPageActions.switchcallTabUserB();
    } catch (error) {
        console.log(error)
    }
});
step("User B should answer call", async function() {
    try {
        await callPageActions.answerCall();
    } catch (error) {
        console.log(error)
    }
});
step("User B should return to home page and approve permissions", async function() {
    try {
        await callPageActions.switchHomePageB();
    } catch (error) {
        console.log(error)
    }
});
step("Switch tab User A", async function() {
    try {
        await callPageActions.switchcallTabUserA();
    } catch (error) {
        console.log(error)
    }
});
step("User A ends the call", async function() {
    try {
        await callPageActions.endCall();
    } catch (error) {
        console.log(error)
    }
});
step("User close tabs", async function() {
    try {
        await callPageActions.closeTabs();
    } catch (error) {
        console.log(error)
    }
});
step("User A click directory icon", async function() {
    try {
        await callPageActions.clickContactsIcon();
    } catch (error) {
        console.log(error)
    }
});
step("User A click history icon", async function() {
    try {
        await callPageActions.clickHistoryIcon();
    } catch (error) {
        console.log(error)
    }
});

