const clientMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
const editClientBtn = "//table/tbody/tr[1]/td[6]//span[text()='编辑']";
const companyNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const phoneInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
const companySelectInput = "//div[@class='right']//form/div[3]/div[1]/div[1]/div[2]/input";
const companySelectOption_1 = "//div[@x-placement]//ul/li[3]/span";
const companySelectOption_2 = "//div[@x-placement]//ul/li[4]/span";
const checkBox = "//div[@class='right']//form/div[4]//label[@role='checkbox']";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../../mock/mock.js');

module.exports = {
    'get edit_client in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client
            .url(client.launchUrl).maximizeWindow()
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

        //客户联系人管理
            .useXpath()
            // .waitForElementVisible(clientMangeNav, mock.pauseTime)
            .click(clientMangeNav)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

        //编辑
        // .waitForElementVisible(editClientBtn, mock.pauseTime)
            .click(editClientBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomerContact')

        /*点击返回icon*/
        // .waitForElementVisible(mock.backIcon, mock.pauseTime)
            .click(mock.backIcon)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

        //编辑
        // .waitForElementVisible(editClientBtn, mock.pauseTime)
            .click(editClientBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomerContact')

        /*点击返回icon*/
        // .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

            // 取消
            // .waitForElementVisible(mock.cancelBtn, mock.pauseTime)
            .click(mock.cancelBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomerContact')

        /*点击返回icon*/
        // .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

            // 取消
            // .waitForElementVisible(mock.cancelBtn, mock.pauseTime)
            .click(mock.e_closeIcon)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomerContact')

        /*点击返回icon*/
        // .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

            // 取消
            // .waitForElementVisible(mock.confirmBtn, mock.pauseTime)
            .click(mock.confirmBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

        //编辑
        // .waitForElementVisible(editClientBtn, mock.pauseTime)
            .click(editClientBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditCustomerContact')

        //输入姓名
        //  .waitForElementVisible(companyNameInput, mock.pauseTime)
            .clearValue(companyNameInput)
            .pause(mock.pauseTime)
            .setValue(companyNameInput, mock.name)

            //输入手机号码
            // .waitForElementVisible(phoneInput, mock.pauseTime)
            .clearValue(phoneInput)
            .pause(mock.pauseTime)
            .setValue(phoneInput, mock.tel)

            // 选择企业
            .waitForElementVisible(companySelectInput, mock.pauseTime)
            .click(companySelectInput)
            .pause(mock.pauseTime)

            // .waitForElementVisible(companySelectOption_1, mock.pauseTime)
            // .click(companySelectOption_1)
            // .click(companySelectOption_2)

            // 是否可以分享
            .waitForElementVisible(checkBox, mock.pauseTime)
            .click(checkBox)

            // .waitForElementVisible(submitBtn, mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            .saveScreenshot('reports/edit_client.png') // 截屏
            .end()
    }
}
