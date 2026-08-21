
import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({path: "./env/.env"});

test ("Login test scenario", async({page}) => {

    await page.goto("https://practice.expandtesting.com/login");
    await expect(page).toHaveURL("https://practice.expandtesting.com/login");
    await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice");

    await page.locator("#username").fill(process.env.LOGIN_USERNAME);
    await page.locator("#password").fill(process.env.LOGIN_PASSWORD);
    await page.locator("#submit-login").click();
    await expect(page).toHaveURL("https://practice.expandtesting.com/secure");


});
