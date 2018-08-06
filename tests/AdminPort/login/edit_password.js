// 定义页面元素
const userInfoDiv = "span.el-dropdown-link.el-dropdown-selfdefine";
const editPasswordBtn = "//li[text()='修改密码']";
const editPasswordInput = "//div[@class='header']/div[2]/div[2]/form/div[1]//input";
const editPasswordConfirmInput = "//div[@class='header']/div[2]/div[2]/form/div[2]//input";
const editPasswordSubBtn = "//div[@class='header']/div[2]/div[2]/form/div[3]//button[text()='提交']";
const mock =require('../../../mock/mock.js');

module.exports = {
    'logout in youqikang': function (client) {

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

            // .waitForElementVisible(userInfoDiv, mock.pauseTime)
            .click(userInfoDiv)

            .useXpath()
            // .waitForElementVisible(editPasswordBtn, mock.pauseTime)
            .click(editPasswordBtn)

            //输入密码
            // .waitForElementVisible(editPasswordInput, mock.pauseTime)
            .setValue(editPasswordInput,mock.password)

            //输入密码
            // .waitForElementVisible(editPasswordConfirmInput, mock.pauseTime)
            .setValue(editPasswordConfirmInput,mock.password)

            //确定
            // .waitForElementVisible(editPasswordSubBtn, mock.pauseTime)
            .setValue(editPasswordSubBtn,mock.password)

            .waitForElementNotVisible(editPasswordBtn, mock.pauseTime)

            .saveScreenshot('reports/login_success.png') // 截屏

            .end()
    }
};
