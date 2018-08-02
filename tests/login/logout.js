const userInfoDiv = "span.el-dropdown-link.el-dropdown-selfdefine";
const logoutBtn = "//li[text()='退出登录']";
const mock = require('../../mock/mock.js');

module.exports = {
    'logout in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client
            .url(client.launchUrl).maximizeWindow()

            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(mock.mock.nameInput, mock.pauseTime)

            .setValue(mock.mock.nameInput, mock.super_admin)//输入账号
            .waitForElementVisible(mock.mock.pwdInput, mock.pauseTime)

            .setValue(mock.mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.mock.loginBtn)//点击登陆

            .waitForElementVisible(mock.mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.mock.homePageText, "欢迎使用，优企康管理平台")

            .waitForElementVisible(userInfoDiv, mock.pauseTime)
            .click(userInfoDiv)

            .useXpath()
            .waitForElementVisible(logoutBtn, mock.pauseTime)
            .click(logoutBtn)
            .pause(mock.pauseTime)

            .waitForElementVisible(mock.alertDiv, mock.pauseTime)
            .assert.containsText(mock.alertDiv, "账号名或者密码错误")

            .assert.urlEquals(client.launchUrl + 'login')

            .saveScreenshot('reports/login_success.png') // 截屏

            .end()
    }
};
