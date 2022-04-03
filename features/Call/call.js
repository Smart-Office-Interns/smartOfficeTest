/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    openTab,
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
    overridePermissions,
    focus,
    switchTo,
    intercept,
    closeTab,
    openIncognitoWindow,
    tap
} = require('taiko');
const assert = require("assert");

const callPageActions = function() {
    // User A Actions
    async function writeName(name) {
        await waitFor(4000);
        try {
            await write(name, into(textBox({ id: 'favorites-search-input' })));
        } catch (error) {
            console.error(error);
        }
    }
    async function writeNameContacts(name) {
        await waitFor(4000);
        try {
            await write(name, into(textBox({ id: 'contact-search-input' })));
        } catch (error) {
            console.error(error);
        }
    }
    async function clickAvatarIcon(username) {
        await waitFor(4000);
        try {
            await click(username);
        } catch (error) {
            console.error(error);
        }
    }
    async function clickAudioIcon() {
        await waitFor(3000);
        try {
            await $("//div[@id='contact-profile-audio-call']").exists();
            await click($("//div[@id='contact-profile-audio-call']"));
        } catch (error) {
            console.error(error);
        }
    }
    async function clickVideoIcon() {
        await waitFor(3000);
        try {
            await $("//div[@id='contact-profile-video-call']").exists();
            await click($("//div[@id='contact-profile-video-call']"));
        } catch (error) {
            console.error(error);
        }
    }
    async function clickContactsIcon() {
        await waitFor(3000);
        try {
            const contactsIcon = listItem({ id: 'sidebar-contacts' });
            await click(contactsIcon);
        } catch (error) {
            console.error(error);
        }
    }
    async function clickHistoryIcon() {
        await waitFor(3000);
        try {
            const historyIcon = listItem({ id: 'sidebar-history' });
            await click(historyIcon);
        } catch (error) {
            console.error(error);
        }
    }
    async function switchTabHomePage() {
        // await waitFor(6000);
        try {
            await overridePermissions('https://sr1.genband.com/smartOffice-manualsv/debug.html', ['videoCapture', 'audioCapture']);
            await switchTo({ name: 'genband', waitForEvents: ['DOMContentLoaded'] });
            await waitFor(3000);
        } catch (error) {
            console.error(error);
        }
    }
    async function switchTabUserA() {
        await waitFor(3000);
        try {
            // const callName = `${call}`;
            // await switchTo(`/${tabName}/`);
             await switchTo(/svtest12@avctlab.net/);
        } catch (error) {
            console.error(error);
        }
    }
    async function endCall() {
        try {
            await waitFor(10000);
            await click($(".icon-call-end"));
        } catch (error) {
            console.error(error);
        }
    }
    async function closeTabs() {
        try {
            await closeTab(/call/);
        } catch (error) {
            console.error(error);
        }
    }
    // User B Actions
    async function openNewTab() {
        await waitFor(3000);
        try {
            await openIncognitoWindow('https://sr1.genband.com/smartOffice-manualsv/debug.html', { name: 'User B', waitForEvents: ['DOMContentLoaded'] });

        } catch (error) {
            console.error(error);
        }
    }
    async function switchOldTab() {
        await waitFor(3000);
        try {
            await switchTo({ name: 'genband', waitForEvents: ['DOMContentLoaded'] });
        } catch (error) {
            console.error(error);
        }
    }
    async function switchTabUserB() {
        await waitFor(3000);
        try {
            await switchTo(/svtest11@avctlab.net/, {
                waitForEvents: ['DOMContentLoaded']
            });
        } catch (error) {
            console.error(error);
        }
    }
    async function answerCall() {
        try {
            await click('ACCEPT');
        } catch (error) {
            console.error(error);
        }
    }
    async function HomePageB() {
        try {
            await switchTo({ name: 'User B', waitForEvents: ['DOMContentLoaded'] });
            await waitFor(3000);
        } catch (error) {
            console.error(error);
        }
    }
   


    return {
        clickAvatarIcon: clickAvatarIcon,
        clickAudioIcon: clickAudioIcon,
        clickVideoIcon:clickVideoIcon,
        writeName: writeName,
        switchTabHomePage: switchTabHomePage,
        endCall: endCall,
        openNewTab: openNewTab,
        switchOldTab: switchOldTab,
        switchTabUserA: switchTabUserA,
        switchTabUserB: switchTabUserB,
        answerCall: answerCall,
        clickContactsIcon: clickContactsIcon,
        clickHistoryIcon:clickHistoryIcon,
        writeNameContacts: writeNameContacts,
        HomePageB:HomePageB,
        closeTabs,closeTabs
    }

}()

module.exports = callPageActions;