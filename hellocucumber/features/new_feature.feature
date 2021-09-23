Feature: want to render
   Scenario: Finding some cheese
      Given I am on the Google search page
      When I search for "cheese"
      Then the page title should start with "cheese"
   
   Scenario: go to my project
      Given I go to my project on "https://e-g-or.github.io/internship_task_1-pages"
      When I click on button with text "add new post"
      Then I should see a form "Create new post"
