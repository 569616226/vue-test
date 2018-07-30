module.exports = {
    'get create_client in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const userMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
        const createClientBtn = "//button/span[text()='新建联系人']";
        const usernameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
        const phoneInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
        const submitBtn = "//button/span[text()='提交']";

        // 启动浏览器并打开http://client.check.elinkport.com
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

            //新建客户联系人
            .waitForElementVisible(createClientBtn, pauseTime)
            .click(createClientBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomerContact')

            //输入姓名
            .waitForElementVisible(usernameInput, pauseTime)
            .setValue(usernameInput,'testUser_2')

            //输入手机号码
            .waitForElementVisible(phoneInput, pauseTime)
            .setValue(phoneInput,'13411108341')

            .pause(pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            .saveScreenshot('reports/create_client.png') // 截屏
            .end()
    }
}
