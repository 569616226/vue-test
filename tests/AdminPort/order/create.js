const OrderMangeNav = "//span[text()='订单管理']";
const createOrder = "//span[text()='新建订单']";
const selectCurrentPlan = "//p[text()='选择现有方案']";
const selectCurrentPlanInput = "//div[@class='right']//form/div[1]//input[1]";
const selectPlanOption = "//div[@x-placement]//ul/li[1]/span";
const selectCompanyInput = "//div[@class='right']//form/div[2]//input[1]";
const selectCompanyOption = "//div[@x-placement]//ul/li[2]/span";
const createOrderBtn = "//div[@class='right']//form//button/span[text()='提交']";
const mock =require('../../../mock/mock.js');

module.exports = {
    'create order in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)
            .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)
            .click(mock.loginBtn)
            .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            //.assert.urlEquals(client.launchUrl)

            //点击订单管理
            .useXpath()
            .click(OrderMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/OrderMange')
            .waitForElementVisible(createOrder, mock.pauseTime)

            //点击新建订单
            .click(createOrder)
            .assert.urlEquals(client.launchUrl + 'Mange/SelectPlan')
            .waitForElementVisible(selectCurrentPlan, mock.pauseTime)

            //选择方案
            .click(selectCurrentPlan)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddSelectPlan')
            .click(selectCurrentPlanInput)
            .waitForElementVisible(selectPlanOption, mock.pauseTime)
            .click(selectPlanOption)
            .pause(mock.pauseTime)

            //选择客户
            .click(selectCompanyInput)
            .waitForElementVisible(selectCompanyOption, mock.pauseTime)
            .click(selectCompanyOption)

            //订单名称
            .waitForElementVisible(createOrderBtn, mock.pauseTime)
            .click(createOrderBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/OrderMange')
            .saveScreenshot('reports/after_create_order.png') // 截屏
            .end()
    }
}
