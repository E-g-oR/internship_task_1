var expect = chai.expect;

import React from 'react'
import '@testing-library/jest-dom'
require('@testing-library/jest-dom')
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')

Given('the DOM', function () {
   const { JSDOM } = require('jsdom')
   const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
   const { window } = jsdom;
   global.window = window;
   global.document = window.document;
})
When('I render a React component called: App', function () {
   this.wrapper = render(<Provider store={store}><App /></Provider>);
});
Then('my app should contain the words: {string}', function (search) {
   assert(this.wrapper.contains(search));
});

Given('I want to render <App/> component', function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
});
When('I want to see if <App/> rendered fine', function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
});
Then('the result of render <App/> should be {string}', function () {
   // Write code here that turns the phrase above into concrete actions
   return 'pending';
});