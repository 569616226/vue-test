module.exports = {
    'get frozen_admin in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
        const frozenAdminBtn = "//table/tbody/tr[1]/td[5]/div[1]/div[1]//span[2]";
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

            //账号管理
            .useXpath()
            .waitForElementVisible(userMangeNav, pauseTime)
            .click(userMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

            //冻结
            .assert.containsText(frozenAdminBtn, "冻结")
            .click(frozenAdminBtn)
            .pause(pauseTime)
            .click(confirmBtn)
            .pause(pauseTime)
            .assert.containsText(frozenAdminBtn, "解冻")
            .click(frozenAdminBtn)
            .pause(pauseTime)
            .click(confirmBtn)
            .pause(pauseTime)
            .assert.containsText(frozenAdminBtn, "冻结")

            .saveScreenshot('reports/frozen_admin.png') // 截屏
            .end()
    }
}
