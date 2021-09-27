const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');
// require("chromedriver");
require("geckodriver");
const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const firefox = require('selenium-webdriver/firefox')
const proxy = require('selenium-webdriver/proxy')


let { setDefaultTimeout } = require('cucumber');
// require('path/posix');
// require('path/posix')
setDefaultTimeout(30000)

const capabilities = Capabilities.firefox();
const driver = new Builder().withCapabilities(capabilities).build();




Given('I am on the Google search page', async function () {
   await driver.get('https://www.google.com');
});

When('I search for {string}', async function (searchTerm) {
   const element = await driver.findElement(By.name('q'));
   element.sendKeys(searchTerm, Key.RETURN);
   element.submit();
});

Then('the page title should start with {string}', async function (searchTerm) {
   setTimeout(async () => {
      const title = await driver.getTitle();
      expect(title.toLocaleLowerCase()).to.contain(searchTerm.toLocaleLowerCase())
      // await driver.quit();

   }, 5000)

});

Given('I go to my project on {string}', async function (url) {
   await driver.get(url);
})
When('I click on button with id {string}', async function (search) {
   await driver.findElement(By.id(search)).click()
})
Then('I should see a form {string}', async function (search) {
   const from = await driver.findElement(By.id('add-post-form'))
   const titleInput = await driver.findElement(By.name('title'))
   const bodyInput = await driver.findElement(By.name('body'))
   expect(titleInput.value).to.be.undefined
   await driver.quit();
})



// ---------------------------------


Given('open {string} page', async function (url) {
   await driver.get(url);
})
When('I want to add new post with title: {string} and body: {string}', async function (title, body) {
   this.title = title
   this.body = body
   await driver.findElement(By.id('add-new-post')).click()
   await driver.findElement(By.name('title')).sendKeys(title, Key.RETURN)
   await driver.findElement(By.name('body')).sendKeys(body, Key.RETURN)
   await driver.findElement(By.id('confirm')).click()

})
Then('it should add this post to the document', async function () {
   const post = await driver.findElement(By.className('added'))
   const postText = await post.getText()
   expect(postText).to.contain(this.body)
   await driver.quit();
});



