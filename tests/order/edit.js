// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const OrderMangeNav = "//span[text()='订单管理']";
const editOrder = "//table//tr[1]/td//span[text()='编辑']";
const selectCurrentPlanInput = "//div[@class='right']//form/div[1]//input[1]";
const selectCompanyInput = "//div[@class='right']//form/div[2]//input[1]";
const selectCompanyOption = "//div[@x-placement]/div[1]/div[1]/ul/li[1]/span";
const mock = require('../../mock/mock.js');
const editOrderBtn = "//div[@class='right']//form//button/span[text()='提交']";

module.exports = {
'edit order in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
        //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(nameInput,pauseTime)
            .setValue(nameInput, mock.super_admin)
            .waitForElementVisible(pwdInput,pauseTime)
            .setValue(pwdInput, mock.super_admin_password)
            .click(loginBtn)
            .waitForElementVisible(homePageText,pauseTime)
            .assert.containsText(homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //点击订单管理
            .useXpath()
            .click(OrderMangeNav)
            .pause(pauseTime)
            .assert.urlContains(client.launchUrl + 'Mange/OrderMange')
            .waitForElementVisible(editOrder,pauseTime)

            //点击编辑
            .click(editOrder)
            .assert.urlContains(client.launchUrl + 'Mange/EditSelectPlanOrder')
            .waitForElementVisible(selectCurrentPlanInput,pauseTime)

            //选择方案
            .setValue(selectCurrentPlanInput,'EditSelectPlanOrder')
            .click(selectCompanyInput)
            .waitForElementVisible(selectCompanyOption,pauseTime)
            .click(selectCompanyOption)

            //订单名称
            .waitForElementVisible(editOrderBtn,pauseTime)
            .click(editOrderBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/OrderMange')
            .saveScreenshot('reports/after_create_order.png') // 截屏
            .end()
    }
}
