const mock = require('../../mock/mock.js');
const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
const adminNameLink = "//table/tbody/tr[1]/td[1]/div[1]/div[1]/b";
const adminDetailDiv = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[1]/span[text()='角色详情']";

module.exports = {
    'get admin in youqikang': function (client) {


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
            .click(adminNameLink)
            .waitForElementVisible(adminDetailDiv, mock.pauseTime)

            .saveScreenshot('reports/find_admin.png') // 截屏
            .end()
    }
}
