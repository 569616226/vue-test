// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const clientMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
const editClientBtn = "//table/tbody/tr[1]/td[6]//span[text()='编辑']";
const usernameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const phoneInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../mock/mock.js');


module.exports = {
    'get edit_client in youqikang': function (client) {

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

             //客户联系人管理
            .useXpath()
            .waitForElementVisible(clientMangeNav, pauseTime)
            .click(clientMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            //编辑
            .waitForElementVisible(editClientBtn, pauseTime)
            .click(editClientBtn)
            .assert.urlContains('Mange/EditCustomerContact')

            //输入姓名
            .waitForElementVisible(usernameInput, pauseTime)
            .elementIdValue(companyNameInput)
            .pause(pauseTime)
            .setValue(usernameInput,mock.name)

            //输入手机号码
            .waitForElementVisible(phoneInput, pauseTime)
            .elementIdValue(companyNameInput)
            .pause(pauseTime)
            .setValue(phoneInput,mock.tel)

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            .saveScreenshot('reports/edit_client.png') // 截屏
            .end()
    }
}
