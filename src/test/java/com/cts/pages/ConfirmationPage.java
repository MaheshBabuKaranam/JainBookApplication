
package com.cts.pages;

import java.io.File;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class ConfirmationPage {

	public static By searchLoc = By.xpath("(//span[contains(text(),'Brahmand World Defence Update 2017  ')]");
	public static By getTextLoc = By.xpath("//span[text()='(0 Record Found)']");

	public static void AssertPublisher(WebDriver driver) {
		String eleSearch = driver.findElement(searchLoc).getText();
		System.out.println(eleSearch);
	}

	public static void AssertReset(WebDriver driver) {
		String pageSource = driver.getPageSource();
		if (pageSource.contains("9789389921113")) {
			System.out.println("Not Reset");
		} else {
			System.out.println("Reset is done");
		}
	}

	public static void errorAssertion(WebDriver driver) {
		String locEle = driver.findElement(getTextLoc).getText();

		System.out.println(locEle);
	}

	public static void takeScreenShot(WebDriver driver) {
		// Take ScrenShot
		Date date = new Date();
		String dateStr = date.toString().replace(":", "-");
		TakesScreenshot ts = (TakesScreenshot) driver;
		File file = ts.getScreenshotAs(OutputType.FILE);
		file.renameTo(new File("src/main/resources/ScreenshotMahesh" + dateStr + ".png"));

	}
	public static void jbaConfCode(WebDriver driver)
	{
		String jbaText = driver.findElement(By.xpath("//div[@itemprop='name']")).getText();
		System.out.println(jbaText);
	}
}