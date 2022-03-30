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
        try {
            await click($(".icon-favorites"));
            await waitFor(3000);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickContact() {
        try { 
            const contactName = "Svtest";
            await click(contactName);
            await waitFor(3000);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickContactProfileChat() {
        try {
            await click($('#contact-profile-chat')); 
            await waitFor(5000);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickDirectoryIcon() {
        try {
            await click($('.icon-nav_contacts'));
            await waitFor(3000); 
        } catch (error) {
            console.error(error);
        }
    }

    async function searchForContact(contact) {
        try {
            await write(contact, into(textBox({ id: 'contact-search-input' })));
            await waitFor(3000);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickSearchedContact() {
        try {
            const searchedName = "Test5, SV";
            await click(searchedName);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickChatIcon() {
        try {
            await click($(".icon-nav_inbox"));
            await waitFor(3000);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickMessages() {
        try {
            const imMessage = await listItem({id:'im-message-0'});
            await click(imMessage);
            await waitFor(3000); 
        } catch (error) {
            console.error(error);
        }
    }

    async function clickHistoryIcon() {
        try {
            await click($(".icon-nav_history"));
            await waitFor(3000);
        } catch (error) {
            console.error(error);
        }
    }

    async function clickLatest() {
        try {
        const latest = "Message Sended From Chat";
        await click(latest);
        } catch (error) {
            console.error(error);
        }
    }

    async function sendingMessage(message) {
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