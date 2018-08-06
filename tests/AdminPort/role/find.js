const roleMangeNav = "//div[@class='left']//span[text()='角色管理']";
const roleNameLink = "//table/tbody/tr[1]/td[1]/div[1]/div[1]/b";
const roleDetailDiv = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[1]/span[text()='角色详情']";
const cancelBtn = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[3]//button[1]/span";
const editBtn = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[3]//button[2]/span";
const mock =require('../../../mock/mock.js');

module.exports = {
'get role in youqikang': function (client) {

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
            .assert.urlEquals(client.launchUrl)

            //账号管理
            .useXpath()
            // .waitForElementVisible(roleMangeNav, mock.pauseTime)
            .click(roleMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/RoleMange')

            .click(roleNameLink)
            .waitForElementVisible(roleDetailDiv, mock.pauseTime)

            .click(mock.r_closeIcon)
            .waitForElementNotVisible(roleDetailDiv, mock.pauseTime)

            .click(roleNameLink)
            .waitForElementVisible(roleDetailDiv, mock.pauseTime)

            .click(cancelBtn)
            .waitForElementNotVisible(roleDetailDiv, mock.pauseTime)

            .click(roleNameLink)
            .waitForElementVisible(roleDetailDiv, mock.pauseTime)

            .click(editBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('SetUp/EditRole')

            .saveScreenshot('reports/find_role.png') // 截屏

            .end()
    }
}
