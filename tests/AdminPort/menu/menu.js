// 定义页面元素
const mock = require('../../../mock/mock.js');
const NavMange = "//div[@class='left']//ul[@class='navBox']/li[2]//span";
const NavSeting = "//div[@class='left']//ul[@class='navBox']/li[3]//span";
const OrderMangeNav = "//span[text()='订单管理']";
const permissionMangeNav = "//span[text()='权限管理']";

module.exports = {
    'test menu in youqikang': function (client) {

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

            .useXpath()
            .waitForElementVisible(OrderMangeNav, mock.pauseTime)
            .click(NavMange)//管理
            .pause(mock.pauseTime)
            .waitForElementNotVisible(OrderMangeNav, mock.pauseTime)

            .click(NavMange)//管理
            .pause(mock.pauseTime)
            .waitForElementVisible(OrderMangeNav, mock.pauseTime)

            .waitForElementVisible(permissionMangeNav, mock.pauseTime)
            .click(NavSeting)//设置
            .pause(mock.pauseTime)
            .waitForElementNotVisible(permissionMangeNav, mock.pauseTime)

            .click(NavSeting)//设置
            .pause(mock.pauseTime)
            .waitForElementVisible(permissionMangeNav, mock.pauseTime)

            .saveScreenshot('reports/meun.png') // 截屏

            .end()
    }
};
