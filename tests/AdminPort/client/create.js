// 定义页面元素
const userMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
const createClientBtn = "//button/span[text()='新建联系人']";
const userNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const phoneInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
const companySelectInput = "//div[@class='right']//form/div[3]/div[1]/div[1]/div[2]/input";
const companySelectOption_1 = "//div[@x-placement]//ul/li[1]/span";
const companySelectOption_2 = "//div[@x-placement]//ul/li[2]/span";
const checkBox = "//div[@class='right']//form/div[4]//label[@role='checkbox']";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../../mock/mock.js');

module.exports = {
    'get create_client in youqikang': function (client) {

        // 启动浏览器并打开http://client.check.elinkport.com
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
            // .waitForElementVisible(userMangeNav, mock.pauseTime)
            .click(userMangeNav)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

        // 进入客户联系人管理
        //  .waitForElementVisible(createClientBtn, mock.pauseTime)
            .click(createClientBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomerContact')

        /*点击返回icon*/
        // .waitForElementVisible(mock.backIcon, mock.pauseTime)
            .click(mock.backIcon)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

        // 进入客户联系人管理
        //  .waitForElementVisible(createClientBtn, mock.pauseTime)
            .click(createClientBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomerContact')

        /*点击返回icon*/
        // .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

        // 进入客户联系人管理
        //  .waitForElementVisible(createClientBtn, mock.pauseTime)
            .click(createClientBtn)
            .pause(mock.pauseTime)

            //输入姓名
            //.waitForElementVisible(userNameInput, mock.pauseTime)
            .setValue(userNameInput, mock.name)

            //输入手机号码
            // .waitForElementVisible(phoneInput, mock.pauseTime)
            .setValue(phoneInput, mock.tel)

            // 选择企业
            // .waitForElementVisible(mock.companySelectInput, mock.pauseTime)
            .click(companySelectInput)
            .pause(mock.pauseTime)

            // .waitForElementVisible(companySelectOption_1, mock.pauseTime)
            .click(companySelectOption_1)
            .click(companySelectOption_2)

            // 是否可以分享
            // .waitForElementVisible(checkBox, mock.pauseTime)
            .click(checkBox)

            .click(submitBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            .saveScreenshot('reports/create_client.png') // 截屏
            .end()
    }
};
