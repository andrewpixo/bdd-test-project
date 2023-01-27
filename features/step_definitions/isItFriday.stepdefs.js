/*
Note: This sample test does not use selenium, see the other feature and stepdef files for a samples using cucumber+selenium.
*/

//Requirements for Cucumber 
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');


function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  } 
  // *(for "Leveling Up" Demonstration)
  // if (today === "Thursday") {
  //   return 'This day belongs to Thor!';
  // } 
  else {
    return "Nope";
  }
}
// Scenario 1 — Sunday
Given('today is Sunday', function () {
  this.today = 'Sunday';
});

// Scenario 2 — Friday
Given('today is Friday', function () {
  this.today = 'Friday';
});

// // *(for "Leveling Up" Demonstration)
// // Scenario 3 — Thor's day
// Given('today is {string}', function (givenDay) {
//   this.today = givenDay;
// });


When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
  console.log('Actual Answer: '+this.actualAnswer)
  console.log('Expected Answer: '+expectedAnswer)
});


