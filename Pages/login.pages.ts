import { Page } from '@playwright/test';

export class Login{
    page: Page;

    constructor (page: Page){
        this.page = page;
    }
    async open(){
        await this.page.goto('https://shopdemo-alex-hot.koyeb.app/login');
    }
}
    async Login(email: string, password: string) {
        await this.page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
        await this.page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(email);
        await this.page.getByPlaceholder('Please Enter Your Password').click();
        await this.page.getByPlaceholder('Please Enter Your Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

const email = 'evgeny.tol@gmail.com'
const password = '123456'

export async function openandlogin(page: Page, email: string, pass: string){
    
}