import { test, expect, Page } from '@playwright/test';
import { openandlogin } from '../Pages/login.pages';

const email = 'evgeny.tol@gmail.com'
const pass = '123456'



test('Purchase the order', async ({ page }) => {

//login
await openandlogin(page, email, pass);
//purchase
await page.getByRole('link', { name: 'Shop' }).click();
await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
await page.getByRole('button', { name: 'Add To Bag' }).click();
await page.getByRole('button', { name: 'Continue Shopping' }).click();
await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN STYLE' }).click();
await page.getByRole('button', { name: 'Add To Bag' }).click();
await page.getByRole('button', { name: 'Place Order' }).click();
await expect(page.getByRole('heading', {name:'Thank you for your order.'})).toBeVisible();
});