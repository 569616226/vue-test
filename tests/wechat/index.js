module.exports = {
    'get wechat in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const wechatMangeNav = "//div[@class='left']//span[text()='公众号管理']";
        const contentInput = "//div[@contenteditable]";
        const submitBtn = "//button/span[text()='提交']";

        // 启动浏览器并打开http://admin.check.elinkport.com

        const content = '优企康，让我们的企业更健康！我们是一个覆盖过千家进出口企业的风险管理平台，专注于为企业提供从订单，生产管理，到物流，关务，财务等环节的风险管理一体化解决方案。';

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

            //点击公众号管理
            .useXpath()
            .waitForElementVisible(wechatMangeNav, pauseTime)
            .click(wechatMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/PubnuMange')

            .assert.containsText(contentInput, content)

            .clearValue(contentInput)
            .pause(pauseTime)
            .click(contentInput)
            .pause(pauseTime)

            .assert.containsText(contentInput, "")

            .setValue(contentInput,content)
            .pause(pauseTime)
            .click(contentInput)
            .pause(pauseTime)

            .assert.containsText(contentInput, content)

            .saveScreenshot('reports/wechat.png') // 截屏

            .end()
    }
}
