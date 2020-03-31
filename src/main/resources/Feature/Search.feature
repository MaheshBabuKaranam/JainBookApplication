Feature: Advance Search
Application is used to Search for books
As I am a Advance search user
I have browser connect with jainbookagency application

Background: common for all Scenarios
Given I have a browser with jainbook agency

Scenario: Publisher Search
When click on advanced search and give publisher as 'Paper Back' and click on search
Then Assert the element by title for Publisher Serach

#Scenario: ISBN Search
#When click on advanced search and give isbn as '9789389921113' and click on search
#Then Take screenshot of the particular book

Scenario: ISBN Search
When click on advanced search and give isbn as from Excel "src/test/resources/Excel/jainbookexcel.xlsx" with SheetName "ISDN SEARCH" and click on search 
Then Take screenshot of the particular book

Scenario: JBA Search
When click on advanced search and give jba as '246892' and click on search
Then Assert the element by title for Publisher Serach

Scenario: Reset Data
When click on advanced search and give search details  as 'Paper Back' and '9789389921113' and '246892' click on reset
Then The entered details should be cleared

Scenario: InvalidSearch
When I entered the Invalid details as 'auihagf' and 'uajwba' click on search
Then Assert for Error message