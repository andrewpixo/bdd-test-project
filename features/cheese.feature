Feature: Cheese is good
   Get us some cheese, dude. 

Scenario: Finding cheese
   Given I am on the Google search page
   When I search for "Cheese!"
   Then the page title should start with "cheese"