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
    closeTab
} = require('taiko');
const assert = require("assert");

const MessagingActions = function() {
    async function clickFavoritesIcon() {
        await waitFor(3000);
        try {
            await click($(".icon-favorites"));
        } catch (error) {
            console.error(error);
        }
    }

    async function clickContact() {
        await waitFor(3000);
        try { 
            const contactName = "Svtest";
            await click(contactName);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickContactProfileChat() {
        await waitFor(3000);
        try {
            await click($('#contact-profile-chat')); 
        } catch (error) {
            console.error(error);
        }
    }

    async function clickDirectoryIcon() {
        await waitFor(3000); 
        try {
            await click($('.icon-nav_contacts'));
        } catch (error) {
            console.error(error);
        }
    }

    async function searchForContact(contact) {
        await waitFor(3000);
        try {
            await write(contact, into(textBox({ id: 'contact-search-input' })));
        } catch (error) {
            console.error(error);
        }
    }

    async function clickSearchedContact() {
        await waitFor(3000);
        try {
            const searchedName = "Test5, SV";
            await click(searchedName);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickChatIcon() {
        await waitFor(3000);
        try {
            await click($(".icon-nav_inbox"));
        } catch (error) {
            console.error(error);
        }
    }

    async function clickMessages() {
        await waitFor(3000); 
        try {
            const imMessage = await listItem({id:'im-message-0'});
            await click(imMessage);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickHistoryIcon() {
        await waitFor(3000);
        try {
            await click($(".icon-nav_history"));
        } catch (error) {
            console.error(error);
        }
    }

    async function clickLatest() {
        await waitFor(3000);
        try {
        const latest = "Message Sended From Chat";
        await click(latest);
        } catch (error) {
            console.error(error);
        }
    }

    async function sendingMessage(message) {
        await waitFor(3000);
        try {
            await write(message,into(textBox({ id : "sendMessage"})));
            await press('Enter')
            await text(message).exists();
        } catch (error) {
            console.error(error);
        }
    }

    async function closingTab() {
        try {
            await closeTab();
        } catch (error) {
            console.error(error);
        }
    }

    return {
        clickChatIcon:clickChatIcon,
        clickMessages:clickMessages,
        sendingMessage:sendingMessage,
        closingTab:closingTab,
        clickFavoritesIcon:clickFavoritesIcon,
        clickContact:clickContact,
        clickContactProfileChat:clickContactProfileChat,
        clickDirectoryIcon:clickDirectoryIcon,
        searchForContact:searchForContact,
        clickSearchedContact:clickSearchedContact,
        clickHistoryIcon:clickHistoryIcon,
        clickLatest:clickLatest
    }
}()
module.exports = MessagingActions;