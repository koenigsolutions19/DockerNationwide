const {test, expect} = require('@playwright/test');
	//OR
	//import { test, expect } from '@playwright/test';
	test('Home Page', async({page})=>{

	await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
	await expect(page.getByPlaceholder('Enter your full name')).toBeVisible
	await expect(page.getByPlaceholder('Enter your full name')).toBeEmpty
	await expect(page.getByPlaceholder('Enter your full name')).toBeEditable
	await expect(page.getByPlaceholder('Enter your full name')).toBeEnabled
	await page.getByPlaceholder('Enter your full name').fill('Satish');

	await page.waitForTimeout(2000);
	await page.getByPlaceholder('Enter your full name').clear
	await page.waitForTimeout(2000);
	});
