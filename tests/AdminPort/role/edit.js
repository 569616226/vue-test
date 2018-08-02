
const roleMangeNav = "//div[@class='left']//span[text()='角色管理']";
const editRoleBtn = "//table/tbody/tr[1]/td[4]//span[text()='编辑']";
const roleNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const roleDisplayNameInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../mock/mock.js');

module.exports = {
    'get edit_role in youqikang': function (client) {


        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入账号
            .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.loginBtn)//点击登陆
            .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //账号管理
            .useXpath()
            .waitForElementVisible(roleMangeNav, mock.pauseTime)
            .click(roleMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/RoleMange')

            //编辑
            .waitForElementVisible(editRoleBtn, mock.pauseTime)
            .click(editRoleBtn)
            .assert.urlContains('SetUp/EditRole')

            //输入角色名
            .waitForElementVisible(roleNameInput, mock.pauseTime)
            .clearValue(roleNameInput)
            .pause(mock.pauseTime)
            .setValue(roleNameInput,mock.name)

            //输入标识
            .waitForElementVisible(roleDisplayNameInput, mock.pauseTime)
            .clearValue(roleDisplayNameInput)
            .pause(mock.pauseTime)
            .setValue(roleDisplayNameInput,mock.cname)

            .waitForElementVisible(submitBtn, mock.pauseTime)
            .click(submitBtn)

            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/RoleMange')

            .saveScreenshot('reports/edit_role.png') // 截屏
            .end()
    }
}
