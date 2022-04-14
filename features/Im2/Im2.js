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
    waitFor,
    $,
    closeTab,
    openIncognitoWindow,
    switchTo,
    openTab
} = require('taiko');
const assert = require("assert");

const MessageControlActions = function() {

    async function openUserA() {
        try {
            await openTab('https://sr1.genband.com/smartOffice-manualsv/debug.html', {name: 'userA',waitForEvents: ['loadEventFired']});
        } catch (error) {
            console.error(error);
        }
    }

    async function openUserB() {
        try {
            await openIncognitoWindow('https://sr1.genband.com/smartOffice-manualsv/debug.html', { name: "userB", waitForEvents: ['loadEventFired']});
        } catch (error) {
            console.error(error);
        }
    }

    async function switchUserB() {
        try {
            await switchTo({name: 'userB'});
        } catch (error) {
            console.error(error);
        }
    }

    async function switchUserA() {
        try {
            await switchTo({name: 'userA'});
        } catch (error) {
            console.error(error);
        }
    }

    async function typeUsername(username) {
        try {
            await write(username, into(textBox({ id: 'startup-login-input-username' })));
        } catch (error) {
            console.error(error);
        }
    }
    
    async function typePassword(username) {
        try {
            await write(username, into(textBox({ id: 'login-input-password' })));
        } catch (error) {
            console.error(error);
        }
    }
    
    async function clickButton(element) {
        try {
            await click(element, { waitForEvents: ['loadEventFired'] })
        } catch (error) {
            console.error(error);
        }
    }
    
    async function getUserNameValueAndCheck(username) {
        try {
            const inputUserName = await textBox({id: 'login-input-username'}).value();
            assert.equal(inputUserName, username);
        } catch (error) {
            console.error(error);
        }
    }
    
    async function isRedirectedHomePage() {
        await waitFor(3000);
        try {
            assert.ok(await textBox('Contact').exists(0,0));
        } catch (error) {
            console.error(error);
        }
    }

    async function sendMessage(message) {
        await waitFor(3000);
        try {
            await write(message,into(textBox({ id : "sendMessage"})));
            await press('Enter')
            await text(message).exists();
        } catch (error) {
            console.error(error);
        }
    }

    async function checkForMessage() {
        await waitFor(5000);
        try {
            assert.ok(await text('Message Received').exists(0,0));
        } catch (error) {
            console.error(error);
        }
    }

    return {
        openUserA:openUserA,
        openUserB:openUserB,
        switchUserB:switchUserB,
        switchUserA:switchUserA, 
        typeUsername:typeUsername,
        typePassword:typePassword,
        clickButton:clickButton,
        getUserNameValueAndCheck:getUserNameValueAndCheck,
        isRedirectedHomePage:isRedirectedHomePage,
        sendMessage:sendMessage,
        checkForMessage:checkForMessage
    }

}()
module.exports = MessageControlActions;