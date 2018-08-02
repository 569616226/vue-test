const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
const frozenAdminBtn = "//table/tbody/tr[1]/td[5]/div[1]/div[1]//span[2]";
const confirmBtn = "//body/div[last()-1]/div[1]/div[3]/button[2]/span";
const mock = require('../../mock/mock.js');

module.exports = {
    'get frozen_admin in youqikang': function (client) {

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
            .waitForElementVisible(userMangeNav, mock.pauseTime)
            .click(userMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

            //冻结
            .assert.containsText(frozenAdminBtn, "冻结")
            .click(frozenAdminBtn)
            .pause(mock.pauseTime)
            .click(confirmBtn)
            .pause(mock.pauseTime)
            .assert.containsText(frozenAdminBtn, "解冻")
            .click(frozenAdminBtn)
            .pause(mock.pauseTime)
            .click(confirmBtn)
            .pause(mock.pauseTime)
            .assert.containsText(frozenAdminBtn, "冻结")

            .saveScreenshot('reports/frozen_admin.png') // 截屏
            .end()
    }
}
