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
const MessagingActions = require('./Im');

step("User clicks favorites icon",async function() {
    try {
        await MessagingActions.clickFavoritesIcon();
    } catch (error) {
        console.log(error)
    }
});

step("User clicks contact",async function() {
    try {
        await MessagingActions.clickContact();
    } catch (error) {
        console.log(error)
    }
});

step("User clicks message icon",async function() {
    try {
        await MessagingActions.clickContactProfileChat();
    } catch (error) {
        console.log(error)
    }
});

step("User clicks directory icon",async function() {
    try {
        await MessagingActions.clickDirectoryIcon();
    } catch (error) {
        console.log(error)
    }
});

step("User search for <arg1> contact",async function(arg1) {
    try {
        await MessagingActions.searchForContact(arg1);
    } catch (error) {
        console.log(error)
    }
});

step("User clicks <arg2> contact",async function(arg2){
    try {
        await MessagingActions.clickSearchedContact(arg2);
    } catch (error) {
        console.log(error)
    }
})

step("User clicks chat icon",async function() {
    try {
        await MessagingActions.clickChatIcon();
    } catch (error) {
        console.log(error)
    }
});

step("User clicks messages",async function() {
    try {
        await MessagingActions.clickMessages();
    } catch (error) {
        console.log(error)
    }
});

step("User clicks history icon",async function() {
    try {
        await MessagingActions.clickHistoryIcon();
    } catch (error) {
        console.log(error)
    }
});

step("User clicks chat from history",async function() {
    try {
        await MessagingActions.clickLatest();
    } catch (error) {
        console.log(error)
    }
});

step("User send <arg0> message to another user",async function(arg0) {
    try{
        await MessagingActions.sendingMessage(arg0);
    } catch (error) {
        console.log(error);
    }
});

step("User close current tab",async function() {
    try {
        await MessagingActions.closingTab();
    }catch (error) {
        console.log(error);
    }
});

step("Messaging From Favorites Single Scenerio",async function() {
    try {
        await MessagingActions.clickFavoritesIcon();
        await MessagingActions.clickContact();
        await MessagingActions.clickContactProfileChat();
        await MessagingActions.sendingMessage("Message Sended From Favorites");
        await MessagingActions.closingTab();
    }catch (error) {
        console.log(error);
    }
});

step("Messaging From Directory Single Scenerio",async function() {
    try {
        await MessagingActions.clickDirectoryIcon();
        await MessagingActions.searchForContact();
        await MessagingActions.clickSearchedContact();
        await MessagingActions.clickContactProfileChat();
        await MessagingActions.sendingMessage("Message Sended From Directory");
        await MessagingActions.closingTab();
    }catch (error) {
        console.log(error);
    }
});

step("Messaging From Chat Single Scenerio",async function() {
    try {
        await MessagingActions.clickChatIcon();
        await MessagingActions.clickMessages();
        await MessagingActions.sendingMessage("Message Sended From Chat");
        await MessagingActions.closingTab();
    }catch (error) {
        console.log(error);
    }
});

step("Messaging From History Single Scenerio",async function() {
    try {
        await MessagingActions.clickHistoryIcon();
        await MessagingActions.clickLatest();
        await MessagingActions.sendingMessage("Message Sended From History");
        await MessagingActions.closingTab();
    }catch (error) {
        console.log(error);
    }
});
