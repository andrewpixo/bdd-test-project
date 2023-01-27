require('dotenv').config();
const BROWSER = process.env.BROWSER;

const { BeforeAll, Given, When, Then, After, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require('assert');

const driver = new Builder().forBrowser(BROWSER).build();
const { setDefaultTimeout } = require('@cucumber/cucumber'); setDefaultTimeout(60 * 1000);


//1) Scenario: I have a small screen
Given('my screen is small, {string} by {string}.', async function (width, height) {
    var w = parseInt(width);
    var h = parseInt(height);
    await driver.manage().window().setRect({ width: w, height: h});
    console.log('screen is small');
});

When('I navigate to the pixotech website.', async function () {
    await driver.get('https://pixotech.com');
    var title = await driver.getTitle();
    console.log('Page title: ' + title);
});

Then('The dropdown menu nav button should be visible.', async function () {
    var element = await driver.findElement(By.id("menu-toggle"));
    var isVisible = await element.isDisplayed();
    assert.deepStrictEqual(isVisible, true);
});

// 2) Scenario: I have a large screen
Given('my screen is large, {string} by {string}.', async function (width, height) {
    var w = parseInt(width);
    var h = parseInt(height);
    await driver.manage().window().setRect({ width: w, height: h});
    console.log('screen is large');
});

When('I navigate to the pixotech website', async function () {
    await driver.get('https://pixotech.com');
    var title = await driver.getTitle();
    console.log('Page title: ' + title);
});

Then('The dropdown menu nav button should not be visible.', async function () {
    var element = await driver.findElement(By.id("menu-toggle"));
    var isVisible = await element.isDisplayed();
    assert.deepStrictEqual(isVisible, false);
});

AfterAll(async function () {
    await driver.quit();
});