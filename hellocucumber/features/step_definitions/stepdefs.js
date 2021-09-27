const { Given, When, Then, AfterAll, Before } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');
// require("chromedriver");
require("geckodriver");

let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(30000)

const capabilities = Capabilities.firefox();
const driver = new Builder().withCapabilities(capabilities).build();

Before(() => {
   this.title = null
   this.body = null
   this.result = null
})

AfterAll(function () {
   return driver.quit();
});

When('I go to my project on {string}', async function (url) {
   await driver.get(url);
   this.loaded = 'page loaded'
})
Then('I should have been told {string}', async function (search) {
   expect(this.loaded).to.equal(search)
})

// ---------------------------------

Given('title: {string}, body: {string}', async function (title, body) {
   this.title = title
   this.body = body
})

const toAddOrNotToAdd = (htArr, title, body) => htArr.length === 0 && title && body ? 'added' : 'rejected'

When('I want to add new post', async function () {
   await driver.findElement(By.id('add-new-post')).click()
   await driver.findElement(By.name('title')).sendKeys(this.title, Key.RETURN)
   await driver.findElement(By.name('body')).sendKeys(this.body, Key.RETURN)
   await driver.findElement(By.id('confirm')).click()
   const helperTextArr = await driver.findElements(By.className('helper-text'))
   this.result = toAddOrNotToAdd(helperTextArr, this.title, this.body)
})
Then('I should be told {string}', async function (expected) {
   if (this.result === 'added') {
      const addedPosts = await driver.findElements(By.className('added'))
      expect(addedPosts).to.have.lengthOf.at.least(1)
   } else await driver.findElement(By.id('cancel')).click()
   expect(expected).to.equal(this.result)
});
