package com.cts.stepdefinitions;

import org.openqa.selenium.WebDriver;

import com.cts.base.LaunchBrowser;
import com.cts.pages.ConfirmationPage;
import com.cts.pages.DashBoardPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinations {
	WebDriver driver;

	@Given("I have a browser with jainbook agency")
	public void i_have_a_browser_with_jainbook_agency() {

		LaunchBrowser.setUp();
		this.driver = LaunchBrowser.driver;
		
	}

	@When("click on advanced search and give publisher as {string} and click on search")
	public void click_on_advanced_search_and_give_publisher_as_and_click_on_search(String string) {
		DashBoardPage.searchByPublisher(LaunchBrowser.driver, string);
	
	}

	@When("click on advanced search and give isbn as {string} and click on search")
	public void click_on_advanced_search_and_give_isbn_as_and_click_on_search(String isbnCode) {
		DashBoardPage.searchByISBN(driver, isbnCode);
		
	}

	@When("click on advanced search and give jba as {string} and click on search")
	public void click_on_advanced_search_and_give_jba_as_and_click_on_search(String jbaCode) {

		DashBoardPage.searchByJBACode(driver, jbaCode);

	}

	@When("click on advanced search and give search details  as {string} and {string} and {string} click on reset")
	public void click_on_advanced_search_and_give_search_details_as_and_and_click_on_reset(String publisher,
			String isbn, String jba) {

		DashBoardPage.resetMethod(driver, publisher, isbn, jba);

	}

//	@When("I enter the Invalid details as {string} and {string} click on search")
//	public void i_enter_the_Invalid_details_as_and_click_on_search(String invalidEle, String invalidEle1) {
//
//		DashBoardPage.inValidSearch(driver, invalidEle, invalidEle1);
//
//	}
	@When("I entered the Invalid details as {string} and {string} click on search")
	public void i_entered_the_Invalid_details_as_and_click_on_search(String invalidEle, String invalidEle1) {
		DashBoardPage.inValidSearch(driver, invalidEle, invalidEle1);
	}
	@Then("The entered details should be cleared")
	public void the_entered_details_should_be_cleared() {

		ConfirmationPage.AssertReset(driver);
		driver.close();
	}


	@Then("Assert for Error message")
	public void assert_for_Error_message() {

		ConfirmationPage.errorAssertion(driver);
		driver.close();

	}

	@Then("Assert the element by title for Publisher Serach")
	public void assert_the_element_by_title_for_Publisher_Serach() {

		ConfirmationPage.AssertPublisher(driver);
         driver.close();
	}

	@Then("Take screenshot of the particular book")
	public void take_screenshot_of_the_particular_book() {
		ConfirmationPage.takeScreenShot(driver);
		driver.close();
		
	}

	@Then("Assert the element by title for JBA search")
	public void assert_the_element_by_title_for_JBA_search() {

		ConfirmationPage.jbaConfCode(driver);
		driver.close();
		
	}

}