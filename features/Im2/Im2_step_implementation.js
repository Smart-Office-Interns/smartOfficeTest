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
const MessageControlActions = require('./Im2');

step("User A login",async function() {
    try {
        await MessageControlActions.openUserA();
    } catch (error) {
        console.log(error)
    }
});

step("The user A logged in successfully", async function() {
    try {
        await MessageControlActions.typeUsername("svtest7@avctlab.net");
        await MessageControlActions.clickButton('NEXT');
        await MessageControlActions.typePassword('Kandy-1234');
        await MessageControlActions.clickButton('LOGIN');
     } catch (error) {
         console.log(error);
     }
});

step("User B login",async function() {
    try {
        await MessageControlActions.openUserB();
    } catch (error) {
        console.log(error)
    }
});

step("The user B logged in successfully", async function() {
    try {
        await MessageControlActions.typeUsername("svtest12@avctlab.net");
        await MessageControlActions.clickButton('NEXT');
        await MessageControlActions.typePassword('Kandy-1234');
        await MessageControlActions.clickButton('LOGIN');
     } catch (error) {
         console.log(error);
     }
});

step("Switch to user B",async function() {
    try {
        await MessageControlActions.switchUserB();
    } catch (error) {
        console.log(error)
    }
});

step("Switch to user A",async function() {
    try {
        await MessageControlActions.switchUserA();
    } catch (error) {
        console.log(error)
    }
});

step("User A sends <arg3> message to user B",async function(arg3){
    try {
        await MessageControlActions.sendMessage(arg3);
    } catch (error) {
        console.log(error)
    }
})

step("User B checks for message" , async function(){
    try {
        await MessageControlActions.checkForMessage();
    } catch (error) {
        console.log(error)
    }
})



