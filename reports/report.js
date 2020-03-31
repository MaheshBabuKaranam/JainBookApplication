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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/booksearch.aspx\"\u003e...\u003c/a\u003e is not clickable at point (453, 111). Other element would receive the click: \u003cp\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.55.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49335}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fa5fba1f14f4997317479a86e8ce3194\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.pages.DashBoardPage.searchByPublisher(DashBoardPage.java:20)\r\n\tat com.cts.stepdefinitions.StepDefinations.click_on_advanced_search_and_give_publisher_as_and_click_on_search(StepDefinations.java:26)\r\n\tat ✽.click on advanced search and give publisher as \u0027Paper Back\u0027 and click on search(file:///C:/Users/USER/git/JainBookApplication/src/main/resources/Feature/Search.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Assert the element by title for Publisher Serach",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.assert_the_element_by_title_for_Publisher_Serach()"
});
formatter.result({
  "status": "skipped"
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
  "name": "click on advanced search and give isbn as from Excel \"src/test/resources/Excel/jainbookexcel.xlsx\" with SheetName \"ISDN SEARCH\" and click on search",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Take screenshot of the particular book",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.take_screenshot_of_the_particular_book()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/booksearch.aspx\"\u003e...\u003c/a\u003e is not clickable at point (438, 111). Other element would receive the click: \u003cp\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.55.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49421}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 01ccbaae4001731b89bc381a7fa6cc76\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.pages.DashBoardPage.searchByJBACode(DashBoardPage.java:34)\r\n\tat com.cts.stepdefinitions.StepDefinations.click_on_advanced_search_and_give_jba_as_and_click_on_search(StepDefinations.java:39)\r\n\tat ✽.click on advanced search and give jba as \u0027246892\u0027 and click on search(file:///C:/Users/USER/git/JainBookApplication/src/main/resources/Feature/Search.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Assert the element by title for Publisher Serach",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.assert_the_element_by_title_for_Publisher_Serach()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/booksearch.aspx\"\u003e...\u003c/a\u003e is not clickable at point (438, 111). Other element would receive the click: \u003cp\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.55.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49469}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5f4e07f2cbf2fc9df976ad34d4a464b8\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.pages.DashBoardPage.resetMethod(DashBoardPage.java:40)\r\n\tat com.cts.stepdefinitions.StepDefinations.click_on_advanced_search_and_give_search_details_as_and_and_click_on_reset(StepDefinations.java:47)\r\n\tat ✽.click on advanced search and give search details  as \u0027Paper Back\u0027 and \u00279789389921113\u0027 and \u0027246892\u0027 click on reset(file:///C:/Users/USER/git/JainBookApplication/src/main/resources/Feature/Search.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The entered details should be cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.the_entered_details_should_be_cleared()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/booksearch.aspx\"\u003e...\u003c/a\u003e is not clickable at point (438, 111). Other element would receive the click: \u003cp\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.55.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49519}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 31b6fa31a14beb1d64e79895f8eedd4f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.pages.DashBoardPage.inValidSearch(DashBoardPage.java:48)\r\n\tat com.cts.stepdefinitions.StepDefinations.i_entered_the_Invalid_details_as_and_click_on_search(StepDefinations.java:59)\r\n\tat ✽.I entered the Invalid details as \u0027auihagf\u0027 and \u0027uajwba\u0027 click on search(file:///C:/Users/USER/git/JainBookApplication/src/main/resources/Feature/Search.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Assert for Error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinations.assert_for_Error_message()"
});
formatter.result({
  "status": "skipped"
});
});