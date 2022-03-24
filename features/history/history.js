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

const HistoryActions = function() {
    async function clickHistoryIcon() {
        try {
            const historyIcon = await listItem({id: 'sidebar-history'});
            await click(historyIcon);
        } catch (error) {
            console.error(error);
        }
    }

    async function getHistoryElement() {
        const historyList = await $('historylogs-list')
    }




    return{
        clickHistoryIcon: clickHistoryIcon,
        getHistoryElement: getHistoryElement
    }
}()

module.exports = HistoryActions;
