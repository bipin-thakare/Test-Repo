Feature: login Feature

@smoke
  Scenario Outline: Successful login with valid credentials
   Given user is on the home page
   And user clicks on login link
   When user enters valid username as "<username>"
   And user enters valid password as "<password>"

   Examples:
     | username  | password    |
     | testuser  | password123 |
     | demoUser  | demoPass    | 
     | sampleUser| samplePass  |

@regression
Scenario: add the Samsung galaxy s6 to cart
 Given user is on the home page
 When user clicks on the Samsung galaxy s6 link
 And user clicks on add to cart button
 Then item should be added to the cart
 