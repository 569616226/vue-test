module.exports = {
    'get frozen_admin in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const clientMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
        const frozenBtn = "//table/tbody/tr[1]/td[6]/div[1]/div[1]//span[2]";
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

            //客户联系人管理
            .useXpath()
            .waitForElementVisible(clientMangeNav, pauseTime)
            .click(clientMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            //冻结
            .assert.containsText(frozenBtn, "冻结")
            .click(frozenBtn)
            .pause(pauseTime)
            .click(confirmBtn)
            .pause(pauseTime)
            .assert.containsText(frozenBtn, "解冻")
            .click(frozenBtn)
            .pause(pauseTime)
            .click(confirmBtn)
            .pause(pauseTime)
            .assert.containsText(frozenBtn, "冻结")

            .saveScreenshot('reports/frozen_client.png') // 截屏
            .end()
    }
}
