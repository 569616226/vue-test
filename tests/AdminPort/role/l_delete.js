const roleMangeNav = "//div[@class='left']//span[text()='角色管理']";
const delRoleBtn = "//table/tbody/tr[1]/td[4]/div[1]/div[1]//span[2]";
const confirmBtn = "//body/div[last()-1]/div[1]/div[3]/button[2]/span";
const mock =require('../../../mock/mock.js');

module.exports = {
'get del_role in youqikang': function (client) {

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

            //角色管理
            .useXpath()
            // .waitForElementVisible(roleMangeNav, mock.pauseTime)
            .click(roleMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/RoleMange')

            //删除
            .assert.containsText(delRoleBtn, "删除")
            .click(delRoleBtn)
            .pause(mock.pauseTime)

            .click(mock.r_closeIcon)
            .pause(mock.pauseTime)

            .click(delRoleBtn)
            .pause(mock.pauseTime)

            .click(mock.cancelBtn)
            .pause(mock.pauseTime)

            .click(delRoleBtn)
            .pause(mock.pauseTime)

            .click(confirmBtn)
            .pause(mock.pauseTime)

            .saveScreenshot('reports/del_role.png') // 截屏
            .end()
    }
}
