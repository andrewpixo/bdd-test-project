Feature: Navigate the website menu from all screen sizes
Pixo's website menu should be different for small screens versus large screens.

Scenario: I have a small screen
Given my screen is small, '600' by '800'.
When I navigate to the pixotech website.
Then The dropdown menu nav button should be visible.

Scenario: I have a large screen
Given my screen is large, '1024' by '768'.
When I navigate to the pixotech website
Then The dropdown menu nav button should not be visible.