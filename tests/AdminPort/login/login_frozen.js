// 定义页面元素
const mock =require('../../../mock/mock.js');

module.exports = {

    'login with error name in youqikang': function (client) {
        // 启动浏览器并打开http://admin.check.elinkport.com
        client
            .url(client.launchUrl).maximizeWindow()
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')

            .waitForElementVisible(mock.mock.nameInput, mock.pauseTime)
            .setValue(mock.mock.nameInput, 'error name')//输入账号

            .waitForElementVisible(mock.mock.pwdInput, mock.pauseTime)
            .setValue(mock.mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.mock.loginBtn)//点击登陆

            .useXpath()
            .waitForElementVisible(mock.alertDiv, mock.pauseTime)
            .assert.containsText(mock.alertDiv, "账号名或者密码错误")

            .assert.urlEquals(client.launchUrl+'login?redirect=%2F')

            .saveScreenshot('reports/login_with_error_name.png') // 截屏

            .end()
    }
};
