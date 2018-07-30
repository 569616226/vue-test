// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
const delAdminBtn = "//table/tbody/tr[1]/td[5]/div[1]/div[1]//span[3]";
const confirmBtn = "//body/div[last()-1]/div[1]/div[3]/button[2]/span";
const mock = require('../../mock/mock.js');

module.exports = {
    'get del_admin in youqikang': function (client) {


        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(nameInput, pauseTime)
            .setValue(nameInput, mock.super_admin)//输入账号
            .waitForElementVisible(pwdInput, pauseTime)
            .setValue(pwdInput, mock.super_admin_password)//输入密码
            .click(loginBtn)//点击登陆
            .waitForElementVisible(homePageText, pauseTime)
            .assert.containsText(homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //账号管理
            .useXpath()
            .waitForElementVisible(userMangeNav, pauseTime)
            .click(userMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

            //删除
            .assert.containsText(delAdminBtn, "删除")
            .click(delAdminBtn)
            .pause(pauseTime)
            .click(confirmBtn)
            .pause(pauseTime)

            .saveScreenshot('reports/del_admin.png') // 截屏
            .end()
    }
}
