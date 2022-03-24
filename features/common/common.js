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

const CommonActions = function() {

    async function clickProfileIcon() {
        try {
            const profileIcon = await listItem({id: 'sidebar-profile'});
            await click(profileIcon);
        } catch (error) {
            console.error(error);
        }
    }

    async function wait(time) {
        await waitFor(time);
    }




    return{
        clickProfileIcon: clickProfileIcon,
        wait: wait
    }
}()

module.exports = CommonActions;
