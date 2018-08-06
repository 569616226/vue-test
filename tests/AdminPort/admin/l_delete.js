const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
const delAdminBtn = "//table/tbody/tr[1]/td[last()]/div[1]/div[1]//span[3]";
const mock = require('../../../mock/mock.js');

module.exports = {
    'get del_admin in youqikang': function (client) {
        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
        //登陆
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

        //账号管理
            .useXpath()
            // .waitForElementVisible(userMangeNav, mock.pauseTime)
            .click(userMangeNav)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

        //删除
        // .assert.containsText(delAdminBtn, "删除")
            .click(delAdminBtn)
            .pause(mock.pauseTime)

            // 取消
            .click(mock.cancelBtn)
            .pause(mock.pauseTime)

            //删除
            // .assert.containsText(delAdminBtn, "删除")
            .click(delAdminBtn)
            .pause(mock.pauseTime)

            // 取消
            .click(mock.r_closeIcon)
            .pause(mock.pauseTime)

            // .assert.containsText(delAdminBtn, "删除")
            .click(delAdminBtn)
            .pause(mock.pauseTime)

            // 确定
            .click(mock.confirmBtn)
            .pause(mock.pauseTime)

            .saveScreenshot('reports/del_admin.png') // 截屏
            .end()
    }
}
