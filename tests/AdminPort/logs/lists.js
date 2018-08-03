const logMangeNav = "//div[@class='left']//span[text()='系统操作日志']";
const mock =require('../../../mock/mock.js');

module.exports = {
'get logs in youqikang': function (client) {

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

            //点击订单管理
            .useXpath()
            .waitForElementVisible(logMangeNav, mock.pauseTime)
            .click(logMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/SysOperationLog')

            .saveScreenshot('reports/logs.png') // 截屏

            .end()
    }
}
