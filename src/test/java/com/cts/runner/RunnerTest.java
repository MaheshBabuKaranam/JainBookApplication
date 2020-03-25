package com.cts.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@CucumberOptions(features = { "src/main/resources/Feature/" }, glue = {
		"com/cts/stepdefinitions" }, plugin = { "html:reports/" }, monochrome = true,dryRun = false )
@RunWith(Cucumber.class)
public class RunnerTest {

}