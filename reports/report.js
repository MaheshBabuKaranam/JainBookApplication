$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Feature/Search.feature");
formatter.feature({
  "name": "Advance Search",
  "description": "Application is used to Search for books\nAs I am a Advance search user\nI have browser connect with jainbookagency application",
  "keyword": "Feature"
});
formatter.background({
  "name": "common for all Scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with jainbook agency",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.i_have_a_browser_with_jainbook_agency()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Publisher Search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on advanced search and give publisher as \u0027Paper Back\u0027 and click on search",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.click_on_advanced_search_and_give_publisher_as_and_click_on_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert the element by title for Publisher Serach",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.assert_the_element_by_title_for_Publisher_Serach()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression (//span[contains(text(),\u0027Brahmand World Defence Update 2017  \u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027(//span[contains(text(),\u0027Brahmand World Defence Update 2017  \u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MUT351U\u0027, ip: \u0027192.168.43.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\NVSAIK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52781}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1080757115a4d48372930b0474b100c5\n*** Element info: {Using\u003dxpath, value\u003d(//span[contains(text(),\u0027Brahmand World Defence Update 2017  \u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cts.pages.ConfirmationPage.AssertPublisher(ConfirmationPage.java:18)\r\n\tat com.cts.stepdefinitions.StepDefinations.assert_the_element_by_title_for_Publisher_Serach(StepDefinations.java:80)\r\n\tat ✽.Assert the element by title for Publisher Serach(file:///C:/Users/NVSAIKUMAR/Desktop/MaheshProject/JainBookApplication/src/main/resources/Feature/Search.feature:11)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "common for all Scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with jainbook agency",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.i_have_a_browser_with_jainbook_agency()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ISBN Search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on advanced search and give isbn as \u00279789389921113\u0027 and click on search",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.click_on_advanced_search_and_give_isbn_as_and_click_on_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take screenshot of the particular book",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.take_screenshot_of_the_particular_book()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "common for all Scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with jainbook agency",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.i_have_a_browser_with_jainbook_agency()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "JBA Search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on advanced search and give jba as \u0027246892\u0027 and click on search",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.click_on_advanced_search_and_give_jba_as_and_click_on_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert the element by title for Publisher Serach",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.assert_the_element_by_title_for_Publisher_Serach()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression (//span[contains(text(),\u0027Brahmand World Defence Update 2017  \u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027(//span[contains(text(),\u0027Brahmand World Defence Update 2017  \u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MUT351U\u0027, ip: \u0027192.168.43.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\NVSAIK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52994}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 85e67c118a334d088da07db19b36c35f\n*** Element info: {Using\u003dxpath, value\u003d(//span[contains(text(),\u0027Brahmand World Defence Update 2017  \u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cts.pages.ConfirmationPage.AssertPublisher(ConfirmationPage.java:18)\r\n\tat com.cts.stepdefinitions.StepDefinations.assert_the_element_by_title_for_Publisher_Serach(StepDefinations.java:80)\r\n\tat ✽.Assert the element by title for Publisher Serach(file:///C:/Users/NVSAIKUMAR/Desktop/MaheshProject/JainBookApplication/src/main/resources/Feature/Search.feature:19)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "common for all Scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with jainbook agency",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.i_have_a_browser_with_jainbook_agency()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Reset Data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on advanced search and give search details  as \u0027Paper Back\u0027 and \u00279789389921113\u0027 and \u0027246892\u0027 click on reset",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.click_on_advanced_search_and_give_search_details_as_and_and_click_on_reset(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The entered details should be cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.the_entered_details_should_be_cleared()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "common for all Scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with jainbook agency",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.i_have_a_browser_with_jainbook_agency()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "InvalidSearch",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I entered the Invalid details as \u0027auihagf\u0027 and \u0027uajwba\u0027 click on search",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.i_entered_the_Invalid_details_as_and_click_on_search(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert for Error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.assert_for_Error_message()"
});
formatter.result({
  "status": "passed"
});
});