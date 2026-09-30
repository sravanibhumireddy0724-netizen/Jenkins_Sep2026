import { test, expect } from '@playwright/test';
import{LoginPage} from '../src/Pages/LoginPage';
import{HomePage} from '../src/Pages/HomePage';


let loginPage:LoginPage;
let homePage:HomePage;

test.beforeEach( async({page})=>{
loginPage=new LoginPage(page);
await loginPage.goToLoginPage();
homePage=new HomePage(page);

});

test('Checking Config file reading - User able to login',async({})=>{
await loginPage.goToLoginPage();
await loginPage.doLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!);
await homePage.isLogoutLinkExist();
})
