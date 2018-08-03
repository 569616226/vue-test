const mock =require('../../../mock/mock.js');
const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
const adminNameLink = "//table/tbody/tr[1]/td[1]/div[1]/div[1]/b";
const adminDetailDiv = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[1]/span[text()='角色详情']";
const cancleBtn = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[3]/div/button[1]/span";
const editBtn = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[3]/div/button[2]/span";

module.exports = {
    'get admin in youqikang': function (client) {

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
            .assert.urlEquals(client.launchUrl)

            //账号管理
            .useXpath()
            // .waitForElementVisible(userMangeNav, mock.pauseTime)
            .click(userMangeNav)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

            /*点击账号名称*/
            .click(adminNameLink)
            .pause(mock.pauseTime)
            // .waitForElementVisible(adminDetailDiv, mock.pauseTime)

            /*点击关闭icon*/
            // .waitForElementVisible(mock.closeIcon, mock.pauseTime)
            .click(mock.r_closeIcon)
            .waitForElementNotVisible(adminDetailDiv, mock.pauseTime)

            /*点击账号名称*/
            .click(adminNameLink)
            .pause(mock.pauseTime)
            // .waitForElementVisible(adminDetailDiv, mock.pauseTime)

            /*点击取消按钮*/
            // .waitForElementVisible(cancleBtn, mock.pauseTime)
            .click(cancleBtn)
            .waitForElementNotVisible(adminDetailDiv, mock.pauseTime)

            /*点击账号名称*/
            .click(adminNameLink)
            .pause(mock.pauseTime)
            // .waitForElementVisible(adminDetailDiv, mock.pauseTime)

            /*点击编辑按钮*/
            // .waitForElementVisible(editBtn, mock.pauseTime)
            .click(editBtn)
            .pause(mock.pauseTime)

            .assert.urlContains('SetUp/EditUsers')

            .saveScreenshot('reports/find_admin.png') // 截屏
            .end()
    }
}
