package com.cts.stepdefinitions;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.cts.base.LaunchBrowser;
import com.cts.pages.ConfirmationPage;
import com.cts.pages.DashBoardPage;
import com.cts.utils.ReadExcel;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinations {
	WebDriver driver;

	@Given("I have a browser with jainbook agency")
	public void i_have_a_browser_with_jainbook_agency() {
		// launching the browser
		LaunchBrowser.setUp();
		// local variable pointing the driver
		this.driver = LaunchBrowser.driver;
		
	}

	@When("click on advanced search and give publisher as {string} and click on search")
	public void click_on_advanced_search_and_give_publisher_as_and_click_on_search(String string) {
		// searching the books by using publisher names
		DashBoardPage.searchByPublisher(LaunchBrowser.driver, string);
	
	}

//	@When("click on advanced search and give isbn as {string} and click on search")
//	public void click_on_advanced_search_and_give_isbn_as_and_click_on_search(String isbnCode) {
//		DashBoardPage.searchByISBN(driver, isbnCode);
//		
//	}
	@When("click on advanced search and give isbn as from Excel {string} with SheetName {string} and click on search")
	public void click_on_advanced_search_and_give_isbn_as_from_Excel_with_SheetName_and_click_on_search(String fileDetails, String sheetName) throws IOException {
		String str[][] = ReadExcel.getSheetIntoStringArray("src/test/resources/Excel/jainbookexcel.xlsx",
				"ISDN SEARCH");
		//searching the book using isdn number
		DashBoardPage.searchByISBN(driver, str[0][0]);
	}


	@When("click on advanced search and give jba as {string} and click on search")
	public void click_on_advanced_search_and_give_jba_as_and_click_on_search(String jbaCode) {
		// searching the book using jba code
		DashBoardPage.searchByJBACode(driver, jbaCode);

	}

	@When("click on advanced search and give search details  as {string} and {string} and {string} click on reset")
	public void click_on_advanced_search_and_give_search_details_as_and_and_click_on_reset(String publisher,
			String isbn, String jba) {
		// giving search details and clicking on reset button
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
		// entering invalid details and click on search
		DashBoardPage.inValidSearch(driver, invalidEle, invalidEle1);
	}
	@Then("The entered details should be cleared")
	public void the_entered_details_should_be_cleared() {
		// comparing the expected text with actual text
		ConfirmationPage.AssertReset(driver);
		// closing the driver
		driver.close();
	}


	@Then("Assert for Error message")
	public void assert_for_Error_message() {
		// comparing the expected text with actual text
		ConfirmationPage.errorAssertion(driver);
		// closing the driver
		driver.close();

	}

	@Then("Assert the element by title for Publisher Serach")
	public void assert_the_element_by_title_for_Publisher_Serach() {
		// comparing the expected text with actual text
		ConfirmationPage.AssertPublisher(driver);
		// closing the driver
         driver.close();
	}

	@Then("Take screenshot of the particular book")
	public void take_screenshot_of_the_particular_book() {
		// taking the screenshot
		ConfirmationPage.takeScreenShot(driver);
		//closing the driver
		driver.close();
		
	}

	@Then("Assert the element by title for JBA search")
	public void assert_the_element_by_title_for_JBA_search() {
		// storing the confirmation text into a string variable
		ConfirmationPage.jbaConfCode(driver);
		// closing the driver
		driver.close();
		
	}

}