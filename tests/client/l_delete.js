module.exports = {
    'get del_client in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const userMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
        const delBtn = "//table/tbody/tr[1]/td[6]/div[1]/div[1]//span[3]";
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
            .waitForElementVisible(userMangeNav, pauseTime)
            .click(userMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            //删除
            .assert.containsText(delBtn, "删除")
            .click(delBtn)
            .pause(pauseTime)
            .click(confirmBtn)
            .pause(pauseTime)

            .saveScreenshot('reports/del_client.png') // 截屏
            .end()
    }
}
