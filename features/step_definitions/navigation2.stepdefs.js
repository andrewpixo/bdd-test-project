// require('dotenv').config();
// const MACHINE_CONFIG = process.env.MACHINE_CONFIG
// //note: switch selection is set from the .env file
// switch (MACHINE_CONFIG) {
//     case '0':
//         var machineSetup = { browserName: 'Chrome', platform: 'Windows 11', version: 'latest', resolution: '2048x1536' }
//         break;
//     case '1':
//         var machineSetup = { browserName: 'Firefox', platform: 'Windows 11', version: 'latest', resolution: '1280x800' }
//         break;
//     case '2':
//         var machineSetup = { browserName: 'MicrosoftEdge', platform: 'Windows 11', version: 'latest', resolution: '1280x800' }
//         break;
//     case '3':
//         var machineSetup = { browserName: 'Chrome', platform: 'MacOS Monterey', version: 'latest', resolution: '2048x1536' }
//         break;
//     case '4':
//         var machineSetup = { browserName: 'Firefox', platform: 'MacOS Monterey', version: 'latest', resolution: '2048x1536' }
//         break;
//     case '5':
//         var machineSetup = { browserName: 'Safari', platform: 'MacOS Monterey', version: 'latest', resolution: '1280x960' }
//         break;
//     case '6':
//         var machineSetup = { browserName: 'Safari', platformName: 'iOS', deviceName: 'iPhone 12', platformVersion: '14.2', deviceOrientation: 'PORTRAIT' }
//         break;
//     case '7':
//         var machineSetup = { browserName: 'Safari', platformName: 'iOS', deviceName: 'iPad Pro (10.5-inch)', platformVersion: '14.2', deviceOrientation: 'PORTRAIT' }
//         break;
//     case '8':
//         var machineSetup = { browserName: 'Safari', platformName: 'iOS', deviceName: 'iPad Pro (10.5-inch)', platformVersion: '14.2', deviceOrientation: 'LANDSCAPE' }
//         break;
//     case '9':
//         var machineSetup = { browserName: 'Chrome', platformName: 'Android', deviceName: 'Google Pixel 4 XL', platformVersion: '11', deviceOrientation: 'PORTRAIT' }
//         break;
//     case '10':
//         var machineSetup = { browserName: 'Chrome', platformName: 'Android', deviceName: 'Galaxy Tab S6', platformVersion: '11', deviceOrientation: 'PORTRAIT' }
//         break;
//     case '11':
//         var machineSetup = { browserName: 'Chrome', platformName: 'Android', deviceName: 'Galaxy Tab S6', platformVersion: '11', deviceOrientation: 'LANDSCAPE' }
//         break;
// };

// /* 
// Selenium Grid Host
// */
// const USERNAME = process.env.USERNAME; // username: username can be found at automation dashboard
// const KEY = process.env.KEY; // AccessKey:  AccessKey can be generated from profile section
// const GRID_HOST = 'hub.lambdatest.com/wd/hub'; // AKA remoteHub AKA Selenium Grid host
// const URL = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST

// /*
//  Tags for LT dashboard
// */
// if (machineSetup.resolution != undefined) {
//     var tag = (["desktop"]);
// }
// else {
//     var tag = (["mobile", machineSetup.deviceOrientation]);
// };
// /*
// Test Capabilities
// */
// var caps = {
//     // remoteHub testGrid info
//     name: 'BDD Starter-pack',
//     build: 'BDD 1.0',
//     projectName: 'BDD Selenium',
//     tags: tag,
//     video: true, // will automatically record video of each session
//     visual: true, // will automatically record screenshots at each step
//     idleTimeout: "1800", // extends idle timeout from 120 seconds to desired amount (max of 1800 seconds).
//     unexpectedAlertBehaviour: 'dismiss',
//     // desktop browser configuration info
//     platform: machineSetup.platform,
//     browserName: machineSetup.browserName,
//     version: machineSetup.version,
//     resolution: machineSetup.resolution,
//     // // mobile browser configuration info
//     platformName: machineSetup.platformName,
//     deviceName: machineSetup.deviceName,
//     platformVersion: machineSetup.platformVersion,
//     deviceOrientation: machineSetup.deviceOrientation
// };

// /* 
// Browser Driver 
// */
// const { Given, When, Then, After, AfterAll } = require('@cucumber/cucumber');
// const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
// const assert = require('assert');
// //
// const webdriver = require('selenium-webdriver');
// // const SeleniumServer = require('selenium-webdriver/remote').SeleniumServer
// //
// var driver = new webdriver.Builder()
//     .usingServer(URL)
//     .withCapabilities(caps)
//     .build();
// //
// const { setDefaultTimeout } = require('@cucumber/cucumber'); setDefaultTimeout(60 * 1000);

// //1) Scenario: I have a small screen
// Given('my screen is small, {string} by {string}.', async function (width, height) {
//     var w = parseInt(width);
//     var h = parseInt(height);
//     await driver.manage().window().setRect({ width: w, height: h });
//     console.log('screen is small');
// });

// When('I navigate to the pixotech website.', async function () {
//     await driver.get('https://pixotech.com');
//     var title = await driver.getTitle();
//     console.log('Page title: ' + title);
// });

// Then('The dropdown menu nav button should be visible.', async function () {
//     var element = await driver.findElement(By.id("menu-toggle"));
//     var isVisible = await element.isDisplayed();
//     assert.deepStrictEqual(isVisible, true);
// });

// // 2) Scenario: I have a large screen
// Given('my screen is large, {string} by {string}.', async function (width, height) {
//     // var w = parseInt(width);
//     // var h = parseInt(height);
//     await driver.manage().window().setRect({ width: 1024, height: 768 });
//     console.log('screen is large')
// });

// When('I navigate to the pixotech website', async function () {
//     await driver.get('https://pixotech.com');
//     var title = await driver.getTitle();
//     console.log('Page title: ' + title);
// });

// Then('The dropdown menu nav button should not be visible.', async function () {
//     var element = await driver.findElement(By.id("menu-toggle"));
//     var isVisible = await element.isDisplayed();
//     assert.deepStrictEqual(isVisible, false);
// });

// AfterAll(async function () {
//     await driver.quit();
// });