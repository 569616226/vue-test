// 定义页面元素
const mock =require('../../../mock/mock.js');

module.exports = {
    'login in youqikang': function (client) {

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

            .saveScreenshot('reports/login_success.png') // 截屏

            .end()
    }
};
