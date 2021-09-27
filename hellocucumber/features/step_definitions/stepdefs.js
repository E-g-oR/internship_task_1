const { Given, When, Then, AfterAll, Before, BeforeAll } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');
// require("chromedriver");
require("geckodriver");

let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(30000)

const capabilities = Capabilities.firefox();
const driver = new Builder().withCapabilities(capabilities).build();

BeforeAll(() => {
   return driver.get("https://e-g-or.github.io/internship_task_1-pages");
})

Before(() => {
   this.title = null
   this.body = null
   this.result = null
   this.likeBtn = null
})

AfterAll(function () {
   return driver.quit();
});

When('I go to my project on {string}', async function (url) {
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

// =================================

When('I click a button with text ADD TO FAVORITES', async function () {
   const likeBtnArr = await driver.findElements(By.className('post__button'))
   this.likeBtn = likeBtnArr[1]
   expect(this.likeBtn).to.contain(/add to favorites/i)
   this.likeBtn.click()
})
Then('I should see it in favorites list', async function () {
   const favContainer = await driver.findElement(By.className('favorite-cards-container'))
   const favArr = await favContainer.findElements(By.className('favorite'))
   expect(favArr).to.have.lengthOf.at.least(1)
   expect(this.likeBtn).to.contain(/remove/i)
});


When('I want to remove post from favorites', async function () {
   const favContainer = await driver.findElement(By.className('favorite-cards-container'))
   const favArr = await favContainer.findElements(By.className('favorite'))
   expect(favArr).to.have.lengthOf.at.least(1)
   this.favArrLength = favArr.length
   this.firstFav = favArr[0]
})
Then('It should be removed from favorites list', async function () {
   expect(this.firstFav).to.contain(/remove/i)
   await this.firstFav.findElement(By.className('post__button')).click()
   const favContainer = await driver.findElement(By.className('favorite-cards-container'))
   const favArr = await favContainer.findElements(By.className('favorite'))
   expect(favArr).to.have.lengthOf(this.favArrLength - 1)
});
