@regression
Feature: WebdriverUniversity Login Page

    Scenario: Login using valid credentials
        Given I access the webdriverUniversity Login Portal page
        When I enter a username "webdriver"
        And I enter a password "webdriver123"
        And I click on the login button
        Then I should be presented with the following message "validation succeeded"

    Scenario: Login using invalid password credentials
        Given I access the webdriverUniversity Login Portal page
        When I enter a username "webdriver"
        And I enter a password "webdriver555"
        And I click on the login button
        Then I should be presented with the following message "validation failed"

    Scenario: Login using invalid username credentials
        Given I access the webdriverUniversity Login Portal page
        When I enter a username "joe_blogs"
        And I enter a password "webdriver123"
        And I click on the login button
        Then I should be presented with the following message "validation failed"

    @login
    Scenario Outline: Test login via Webdriver University Login Portal
        Given I access the webdriverUniversity Login Portal page
        When I enter a username "<username>"
        And I enter a password "<password>"
        And I click on the login button
        Then I should be presented with the following message "<message>"

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |
            | joe_blogs | webdriver123 | validation failed    |