const mock =require('../../../mock/mock.js');

module.exports = {

    'login with frozen user in youqikang': function (client) {
        // 启动浏览器并打开http://admin.check.elinkport.com
        client
            .url(client.launchUrl).maximizeWindow()
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')

            // .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, 'frozen_test')//输入账号

            // .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, 'frozen_test')//输入密码
            .click(mock.loginBtn)//点击登陆
            .pause(mock.pauseTime)

            .useXpath()
            // .waitForElementVisible(mock.alertDiv, mock.pauseTime)
            .assert.containsText(mock.alertDiv, "账号名已被冻结")

            .assert.urlEquals(client.launchUrl+'login?redirect=%2F')

            .saveScreenshot('reports/login_with_frozen_user.png') // 截屏

            .end()
    }
};
