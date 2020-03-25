package com.cts.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class DashBoardPage {
	public static By advSearchLoc = By.linkText("ADVANCE SEARCH");
	public static By publisherLoc = By.id("txt_publisher");
	public static By searchLoc = By.id("btn_advancedSearch");
	public static By isbnCodeLoc = By.id("txt_isbn");
	public static By authorLoc = By.id("txt_author");
	public static By editionLoc = By.id("txt_edition");
	public static By jbaCodeLoc = By.id("txt_JbaCode");
	public static By resetLoc = By.xpath("//input[@name='Reset']");
	public static By titleLoc = By.id("txt_title");

	public static void searchByPublisher(WebDriver driver, String string) {
		driver.findElement(By.linkText("ADVANCE SEARCH")).click();
		driver.findElement(publisherLoc).sendKeys(string);
		driver.findElement(searchLoc).click();
	}

	public static void searchByISBN(WebDriver driver, String isbnNumber) {
		driver.findElement(advSearchLoc).click();
		driver.findElement(isbnCodeLoc).sendKeys(isbnNumber);
		driver.findElement(searchLoc).click();

	}


	public static void searchByJBACode(WebDriver driver, String code) {
		driver.findElement(advSearchLoc).click();
		driver.findElement(jbaCodeLoc).sendKeys(code);
		driver.findElement(searchLoc).click();
	}

	public static void resetMethod(WebDriver driver, String publisher, String isbncode, String jba) {
		driver.findElement(advSearchLoc).click();
		driver.findElement(publisherLoc).sendKeys(publisher);
		driver.findElement(isbnCodeLoc).sendKeys(isbncode);
		driver.findElement(jbaCodeLoc).sendKeys(jba);
		driver.findElement(resetLoc).click();
	}

	public static void inValidSearch(WebDriver driver, String title, String publisher) {
		driver.findElement(advSearchLoc).click();
		driver.findElement(titleLoc).sendKeys(title);
		driver.findElement(publisherLoc).sendKeys(publisher);
		driver.findElement(searchLoc).click();

	}
}