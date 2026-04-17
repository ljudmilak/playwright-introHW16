import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const APP_URL = process.env.APP_URL;

test.beforeEach(async ({ page }) => {

    if (!APP_URL) {
        console.log('APP_URL is not defined');
    }

    await page.goto(APP_URL);
    await page.waitForLoadState('networkidle');
});

test('TD negative auth with random usernames and passwords', async ({ page }) => {
    const username = page.locator('#username');
    const password = page.locator('[data-name="password-input"]');
    const signInBtn = page.locator('[data-name="signIn-button"]');
    const errorPopup = page.locator('[data-name="authorizationError-popup"]');

    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password();

    await username.fill(randomUsername);
    await password.fill(randomPassword);
    await signInBtn.click();
    await expect(errorPopup).toBeVisible();
});