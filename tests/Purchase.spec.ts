import {randomUUID} from 'crypto'
import { test, expect } from '@playwright/test';

test('Purchase the order', async ({ page }) => {
const email = 'evgeny.tol@gmail.com'
const pass = '123456'
await page.goto('https://shopdemo-alex-hot.koyeb.app/');
await page.getByRole('link', { name: 'Welcome! ' }).click();
await page.getByRole('menuitem', { name: 'Login' }).click();
await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(email);
await page.getByPlaceholder('Please Enter Your Password').click();
await page.getByPlaceholder('Please Enter Your Password').fill(pass);
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('link', { name: 'Shop' }).click();
await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
await page.getByRole('button', { name: 'Add To Bag' }).click();
await page.getByRole('button', { name: 'Place Order' }).click();
await expect(page.getByRole('heading', {name:'Thank you for your order.'})).toBeVisible();
});