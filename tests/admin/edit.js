// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
const editAdminBtn = "//table/tbody/tr[1]/td[5]//span[text()='编辑']";
const usernameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const adminNameInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
const passwordInput = "//div[@class='right']//form/div[3]/div[1]/div[1]/input[@type='text']";
const phoneInput = "//div[@class='right']//form/div[4]/div[1]/div[1]/input[@type='text']";
const roleSelectInput = "//div[@class='right']//form/div[5]/div[1]/div[1]/div[1]/input[@placeholder='请选择角色']";
const roleSelectInputOption = "//div[@x-placement='top-start']/div[1]/div[1]/ul/li[3]/span";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../mock/mock.js');

module.exports = {
    'get edit_admin in youqikang': function (client) {

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
            .waitForElementVisible(userMangeNav, pauseTime)
            .click(userMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

        //编辑
            .waitForElementVisible(editAdminBtn, pauseTime)
            .click(editAdminBtn)
            .assert.urlContains('SetUp/EditUsers')

        //输入姓名
            .waitForElementVisible(usernameInput, pauseTime)
            .elementIdValue(usernameInput)
            .pause(pauseTime)
            .setValue(usernameInput, mock.cname)

            //输入姓名账号
            .waitForElementVisible(adminNameInput, pauseTime)
            .elementIdValue(adminNameInput)
            .pause(pauseTime)
            .setValue(adminNameInput, mock.name)

            //输入密码
            .waitForElementVisible(passwordInput, pauseTime)
            .elementIdValue(passwordInput)
            .pause(pauseTime)
            .setValue(passwordInput, mock.password)

            //输入手机
            .waitForElementVisible(phoneInput, pauseTime)
            .elementIdValue(phoneInput)
            .pause(pauseTime)
            .setValue(phoneInput, mock.tel)

            //输入角色
            .waitForElementVisible(roleSelectInput, pauseTime)
            .click(roleSelectInput)
            .waitForElementVisible(roleSelectInputOption, pauseTime)
            .click(roleSelectInputOption)
            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')


            .saveScreenshot('reports/create_admin.png') // 截屏
            .end()
    }
}
