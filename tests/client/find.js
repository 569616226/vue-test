module.exports = {
    'get client in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const clientMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
        const clientNameLink = "//table/tbody/tr[1]/td[1]/div[1]/div[1]/b";
        const clientDetailDiv = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[1]/span[text()='客户联系人详情']";

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
            .click(clientNameLink)
            .waitForElementVisible(clientDetailDiv, pauseTime)

            .saveScreenshot('reports/find_client.png') // 截屏
            .end()
    }
}
