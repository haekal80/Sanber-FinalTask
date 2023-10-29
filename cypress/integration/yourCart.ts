import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { YourCartPage } from "./pages/yourCart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let yourCartPage = new YourCartPage()
const URL = 'https://www.saucedemo.com/'

it('Remove item from cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpackAddToCart()
    dashboardPage.assertCartItem()
    dashboardPage.moveToCartPage()
    yourCartPage.removeItemBackpack()
    yourCartPage.assertItemBackpack()
})