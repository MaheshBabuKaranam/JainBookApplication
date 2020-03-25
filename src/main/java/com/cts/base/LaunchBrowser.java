
package com.cts.base;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;

public class LaunchBrowser {
	public static WebDriver driver;

	public static void setUp() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe");

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://www.jainbookagency.com/");

	}
	
}