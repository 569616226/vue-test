// 定义页面元素
const mock =require('../../../mock/mock.js');

module.exports = {

    'login with error name in youqikang': function (client) {
        // 启动浏览器并打开http://admin.check.elinkport.com
        client
            .url(client.launchUrl).maximizeWindow()
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')

            // .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, 'error name')//输入账号

            // .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.loginBtn)//点击登陆
            .pause(mock.pauseTime)

            .useXpath()
            // .waitForElementVisible(mock.alertDiv, mock.pauseTime)
            .assert.containsText(mock.alertDiv, "账号名或者密码错误")

            .assert.urlEquals(client.launchUrl+'login?redirect=%2F')

            .saveScreenshot('reports/login_with_error_name.png') // 截屏

            .end()
    }
};
