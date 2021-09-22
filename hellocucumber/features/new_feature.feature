Feature: want to render
   Scenario: render 
      Given the DOM
      When I render a React component called: App
      Then my app should contain the words: "add new post"

   Scenario: render an App
      Given I want to render <App/> component
      When I want to see if <App/> rendered fine
      Then the result of render <App/> should be "rendered"

