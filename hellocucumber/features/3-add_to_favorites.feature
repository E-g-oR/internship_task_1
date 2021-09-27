Feature: Adding post to favorites

   Scenario: like post
      When I click a button with text ADD TO FAVORITES
      Then I should see it in favorites list

Scenario: UNlike post
      When I want to remove post from favorites
      Then It should be removed from favorites list


