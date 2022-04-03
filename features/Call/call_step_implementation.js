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
        await callPageActions.switchOldTab();
    } catch (error) {
        console.log(error)
    }
});
step("User A should type <name> in favorite search engine", async function(name) {
    try {
        await callPageActions.writeName(name);
    } catch (error) {
        console.log(error)
    }
});
step("User A should type <name> in contacts search engine", async function(name) {
    try {
        await callPageActions.writeNameContacts(name);
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
step("User B should answer call", async function() {
    try {
        await callPageActions.answerCall();
    } catch (error) {
        console.log(error)
    }
});
step("User A should return to home page and approve permissions", async function() {
    try {
        await callPageActions.switchTabHomePage();
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
step("Switch tab User A", async function() {
    try {
        await callPageActions.switchTabUserA();
    } catch (error) {
        console.log(error)
    }
});
step("Switch tab User B", async function() {
    try {
        await callPageActions.switchTabUserB();
    } catch (error) {
        console.log(error)
    }
});
step("User B should return to home page", async function() {
    try {
        await callPageActions.HomePageB();
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
step("Switch tab User <tabName>", async function(tabName) {
    try {
        await callPageActions.switchTabUserA(tabName);
    } catch (error) {
        console.log(error)
    }
});