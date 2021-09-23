const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

// require("chromedriver");
require("geckodriver");
// import 'geckodriver'
// driver setup
const capabilities = Capabilities.firefox();
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the Google search page', async function () {
   // Navigate to Url
   await driver.get('https://www.google.com');

});

When('I search for {string}', async function (searchTerm) {
   const element = await driver.findElement(By.name('q'));
   element.sendKeys(searchTerm, Key.RETURN);
   element.submit();
});

const DoesTitleStartWith = (actualTitle, expectedTitle) => actualTitle === expectedTitle ? true : false

Then('the page title should start with {string}', async function (searchTerm) {
   setTimeout(async () => {
      const title = await driver.getTitle();
      expect(title.toLocaleLowerCase()).to.equal(searchTerm.toLocaleLowerCase());
      await driver.quit();
   }, 3000)

});

Given('I go to my project on {string}', function (url) {
   await driver.get(url);
})
When('I click on button with text {string}', function (search) {
   const button = await driver.findElement(By.id('add-post-button'));
})
Then('I should see a form {string}', function (search) {
   let from, titleInput, bodyInput
   if (search === 'Create new post') {
      from = await driver.findElement(By.id('add-post-form'))
      titleInput = await driver.findElement(By.name('title'))
      bodyInput = await driver.findElement(By.name('body'))
   }
})
