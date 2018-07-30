module.exports = {
    'get del_role in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const roleMangeNav = "//div[@class='left']//span[text()='角色管理']";
        const delRoleBtn = "//table/tbody/tr[1]/td[4]/div[1]/div[1]//span[2]";
        const confirmBtn = "//body/div[last()-1]/div[1]/div[3]/button[2]/span";

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(nameInput, pauseTime)
            .setValue(nameInput, 'Super Admin')//输入账号
            .waitForElementVisible(pwdInput, pauseTime)
            .setValue(pwdInput, 'admin123456')//输入密码
            .click(loginBtn)//点击登陆
            .waitForElementVisible(homePageText, pauseTime)
            .assert.containsText(homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //角色管理
            .useXpath()
            .waitForElementVisible(roleMangeNav, pauseTime)
            .click(roleMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/RoleMange')

            //删除
            .assert.containsText(delRoleBtn, "删除")
            .click(delRoleBtn)
            .pause(pauseTime)
            .click(confirmBtn)
            .pause(pauseTime)

            .saveScreenshot('reports/del_role.png') // 截屏
            .end()
    }
}
