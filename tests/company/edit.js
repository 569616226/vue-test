const mock = require('../../mock/mock.js');
// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const companyMangeNav = "//div[@class='left']//span[text()='客户管理']";
const editCompanyBtn = "//table/tbody/tr[1]/td[4]//span[text()='编辑']";
const companyNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const clientSelectInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/div[1]/input[@type='text']";
const clientSelectOption_3 = "//div[@x-placement]//ul/li[3]/span";
const clientSelectOption_4 = "//div[@x-placement]//ul/li[4]/span";
const submitBtn = "//button/span[text()='提交']";

module.exports = {
    'get edit_company in youqikang': function (client) {


        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(nameInput, pauseTime)
            .setValue(nameInput, mock.super_admin)//输入账号
            .waitForElementVisible(pwdInput, pauseTime)
            .setValue(pwdInput, mock.super_admin_password)//输入密码
            .click(loginBtn)//点击登陆
            .waitForElementVisible(homePageText, pauseTime)
            .assert.containsText(homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //账号管理
            .useXpath()
            .waitForElementVisible(companyMangeNav, pauseTime)
            .click(companyMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')

            //编辑
            .waitForElementVisible(editCompanyBtn, pauseTime)
            .click(editCompanyBtn)
            .assert.urlContains('Mange/EditCustomer')

            //输入客户名
            .waitForElementVisible(companyNameInput, pauseTime)
            .elementIdValue(companyNameInput)
            .pause(pauseTime)
            .setValue(companyNameInput,mock.name)

            //输入标识
            .click(clientSelectInput)
            .waitForElementVisible(clientSelectOption_3, pauseTime)
            .waitForElementVisible(clientSelectOption_4, pauseTime)
            .click(clientSelectOption_3)
            .click(clientSelectOption_4)

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)

            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')

            .saveScreenshot('reports/create_company.png') // 截屏
            .end()
    }
}
