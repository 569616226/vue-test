module.exports = {
    'order list in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const OrderMangeNav = "//span[text()='订单管理']";

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
        //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(nameInput, pauseTime)
            .setValue(nameInput, 'Super Admin')
            .waitForElementVisible(pwdInput, pauseTime)
            .setValue(pwdInput, 'admin123456')
            .click(loginBtn)
            .waitForElementVisible(homePageText, pauseTime)
            .assert.containsText(homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

        //点击订单管理
            .useXpath()
            .waitForElementVisible(OrderMangeNav, pauseTime)
            .click(OrderMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/OrderMange')

            .saveScreenshot('reports/order.png') // 截屏
            .end()
    }
}
