require('dotenv').config();
const BROWSER = process.env.BROWSER;

const { BeforeAll, Given, When, Then, After, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require('assert');

const driver = new Builder().forBrowser(BROWSER).build();
const { setDefaultTimeout } = require('@cucumber/cucumber'); setDefaultTimeout(60 * 1000);


Given('I am on the Google search page', async function () {
    await driver.get('http://www.google.com');
});

When('I search for {string}', async function (searchWord) {
    const element = await driver.findElement(By.name('q'));
    await element.sendKeys(searchWord, Key.RETURN);
    await driver.sleep(1000); //pause just 1 second - (Safari browser will break the test without this)  
});

Then('the page title should start with {string}', async function (searchTerm) {
    const title = await driver.getTitle();
    const isTitleStartWithCheese = title.toLowerCase().lastIndexOf(`${searchTerm}`, 0) === 0;
    console.log('Title: ' + title)
    console.log('Index: ' + title.toLowerCase().lastIndexOf(`${searchTerm}`, 0))
    assert.deepStrictEqual(isTitleStartWithCheese, true, ['Nope! No cheese here.']);
});

AfterAll(async function () {
    await driver.quit();
});