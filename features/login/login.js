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
    $
} = require('taiko');
const assert = require("assert");

const LoginPageActions = function() {
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
    // TODO: Make one function from aboves
    
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

    async function clickProfileIcon() {
        // await waitFor(3000);
        try {
            const profileIcon = await listItem({id: 'sidebar-profile'});
            await click(profileIcon);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickLogout() {
        try {
            await listItem('Logout').exists();
            await click(listItem('Logout'));
            await waitFor(3000);
        } catch (error) {
            console.error(error);
        }
    }


    return{
        typeUsername:typeUsername,
        typePassword:typePassword,
        clickButton:clickButton,
        getUserNameValueAndCheck:getUserNameValueAndCheck,
        isRedirectedHomePage:isRedirectedHomePage,
        clickProfileIcon:clickProfileIcon,
        clickLogout: clickLogout
    }
}()

module.exports = LoginPageActions;

