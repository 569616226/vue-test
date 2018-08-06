const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
const editAdminBtn = "//table/tbody/tr[1]/td[last()]//span[text()='编辑']";
const userNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const adminNameInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
const passwordInput = "//div[@class='right']//form/div[3]/div[1]/div[1]/input[@type='text']";
const phoneInput = "//div[@class='right']//form/div[4]/div[1]/div[1]/input[@type='text']";
const roleSelectInput = "//div[@class='right']//form/div[5]/div[1]/div[1]/div[1]/input[@placeholder='请选择角色']";
const roleSelectInputOption = "//div[@x-placement='top-start']/div[1]/div[1]/ul/li[3]/span";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../../mock/mock.js');

module.exports = {

    'get edit_admin in youqikang': function (client) {

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
            //.assert.urlEquals(client.launchUrl)

        //账号管理
            .useXpath()
            // .waitForElementVisible(userMangeNav, mock.pauseTime)
            .click(userMangeNav)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

        //编辑
        //     .waitForElementVisible(editAdminBtn, mock.pauseTime)
            .click(editAdminBtn)
            .assert.urlContains('SetUp/EditUsers')

        //点击返回icon
        //     .waitForElementVisible(mock.backIcon, mock.pauseTime)
            .click(mock.backIcon)
            .pause(mock.pauseTime)

            .assert.urlContains('SetUp/UsersMange')

        //编辑
        //     .waitForElementVisible(editAdminBtn, mock.pauseTime)
            .click(editAdminBtn)
            .pause(mock.pauseTime)

            .assert.urlContains('SetUp/EditUsers')

        //点击返回按钮
        //     .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

            // 取消
            // .waitForElementVisible(mock.cancelBtn, mock.pauseTime)
            .click(mock.cancelBtn)
            .pause(mock.pauseTime)

            .assert.urlContains('SetUp/EditUsers')

        //点击返回按钮
        //     .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

            // 取消
            // .waitForElementVisible(mock.cancelBtn, mock.pauseTime)
            .click(mock.e_closeIcon)
            .pause(mock.pauseTime)

            .assert.urlContains('SetUp/EditUsers')

        //点击返回按钮
        // .waitForElementVisible(mock.backBtn, mock.pauseTime)
            .click(mock.backBtn)
            .pause(mock.pauseTime)

            // 确定
            // .waitForElementVisible(mock.confirmBtn, mock.pauseTime)
            .click(mock.confirmBtn)
            .pause(mock.pauseTime)

            .assert.urlContains('SetUp/UsersMange')

        //编辑
        //     .waitForElementVisible(editAdminBtn, mock.pauseTime)
            .click(editAdminBtn)
            .pause(mock.pauseTime)

            .assert.urlContains('SetUp/EditUsers')

        //输入姓名
        //     .waitForElementVisible(userNameInput, mock.pauseTime)
            .clearValue(userNameInput)
            .pause(mock.pauseTime)

            .setValue(userNameInput, mock.cname)
            .pause(mock.pauseTime)

            //输入姓名账号
            // .waitForElementVisible(adminNameInput, mock.pauseTime)
            .clearValue(adminNameInput)
            .pause(mock.pauseTime)
            .setValue(adminNameInput, mock.name)

            //输入密码
            // .waitForElementVisible(passwordInput, mock.pauseTime)
            .setValue(passwordInput, mock.password)

            //输入手机
            // .waitForElementVisible(phoneInput, mock.pauseTime)
            .clearValue(phoneInput)
            .pause(mock.pauseTime)
            .setValue(phoneInput, mock.tel)

            //输入角色
            // .waitForElementVisible(roleSelectInput, mock.pauseTime)
            .click(roleSelectInput)

            // .waitForElementVisible(roleSelectInputOption, mock.pauseTime)
            .click(roleSelectInputOption)

            // .waitForElementVisible(submitBtn, mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

            .saveScreenshot('reports/create_admin.png') // 截屏
            .end()
    }
}
