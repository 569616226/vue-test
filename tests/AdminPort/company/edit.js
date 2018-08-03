const mock = require('../../../mock/mock.js');
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
        // .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入账号

            // .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码

            .click(mock.loginBtn)//点击登陆
            .pause(mock.pauseTime)

            // .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

        //账号管理
            .useXpath()
            // .waitForElementVisible(companyMangeNav, mock.pauseTime)
            .click(companyMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')

        //编辑
        // .waitForElementVisible(editCompanyBtn, mock.pauseTime)
            .click(editCompanyBtn)
            .assert.urlContains('Mange/EditCustomer')

        //返回icon
            .click(mock.backIcon)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/CustomerMange')

        //编辑
        // .waitForElementVisible(editCompanyBtn, mock.pauseTime)
            .click(editCompanyBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomer')

        /*点击返回btn*/
        // .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

         // 取消
         // .waitForElementVisible(mock.cancelBtn, mock.pauseTime)
            .click(mock.cancelBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomer')

        /*点击返回btn*/
        // .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

         // 取消
         // .waitForElementVisible(mock.cancelBtn, mock.pauseTime)
            .click(mock.e_closeIcon)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomer')

        /*点击返回btn*/
        // .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

        // 确认
        // .waitForElementVisible(mock.confirmBtn, mock.pauseTime)
            .click(mock.confirmBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')

        //编辑
        // .waitForElementVisible(editCompanyBtn, mock.pauseTime)
            .click(editCompanyBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomer')

        //输入客户名
        // .waitForElementVisible(companyNameInput, mock.pauseTime)
            .clearValue(companyNameInput)
            .pause(mock.pauseTime)
            .setValue(companyNameInput, mock.name)

            //输入标识
            .click(clientSelectInput)
            .pause(mock.pauseTime)
            // .waitForElementVisible(clientSelectOption_3, mock.pauseTime)
            // .waitForElementVisible(clientSelectOption_4, mock.pauseTime)
            .click(clientSelectOption_3)
            .click(clientSelectOption_4)

            // .waitForElementVisible(submitBtn, mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')

            .saveScreenshot('reports/create_company.png') // 截屏
            .end()
    }
}
