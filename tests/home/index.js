module.exports = {
    'get home in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const homeNavBtn = "//div[@class='left']/div[1]/ul/li[1]/span";
        const createOrderBtn = "//p[text()='新建订单']";
        const createPlanBtn = "//p[text()='新建诊断方案']";
        const createCompanyBtn = "//p[text()='新建客户']";
        const createClientBtn = "//p[text()='新建客户联系人']";

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

            //点击新建订单
            .useXpath()
            .waitForElementVisible(createOrderBtn, pauseTime)
            .click(createOrderBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/SelectPlan')

            .waitForElementVisible(homeNavBtn, pauseTime)
            .click(homeNavBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl)

            .waitForElementVisible(createPlanBtn, pauseTime)
            .click(createPlanBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddDiagnose')

            .waitForElementVisible(homeNavBtn, pauseTime)
            .click(homeNavBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl)

            .waitForElementVisible(createCompanyBtn, pauseTime)
            .click(createCompanyBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomer')

            .waitForElementVisible(homeNavBtn, pauseTime)
            .click(homeNavBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl)

            .waitForElementVisible(createClientBtn, pauseTime)
            .click(createClientBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomerContact')

            .saveScreenshot('reports/homes.png') // 截屏

            .end()
    }
}
