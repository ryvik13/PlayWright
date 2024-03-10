import { test, expect, Page } from '@playwright/test';
const email = 'evgeny.tol@gmail.com'
const pass = '123456'

export async function login(page: Page, email: string, pass: string){
    await page.goto('https://shopdemo-alex-hot.koyeb.app/');
    await page.getByRole('link', { name: 'Welcome! ' }).click();
    await page.getByRole('menuitem', { name: 'Login' }).click();
    await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
    await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(email);
    await page.getByPlaceholder('Please Enter Your Password').click();
    await page.getByPlaceholder('Please Enter Your Password').fill(pass);
    await page.getByRole('button', { name: 'Login' }).click();
}