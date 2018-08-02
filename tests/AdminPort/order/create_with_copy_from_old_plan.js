const OrderMangeNav = "//span[text()='订单管理']";
const createOrder = "//span[text()='新建订单']";
const selectCurrentPlan = "//p[text()='新建方案']";
const PlanNameInput = "//div[@class='right']//form/div[1]//input[1]";
const selectOldPlanInput = "//div[@class='right']//form/div[1]/div[2]/div[1]/div[2]//input[1]";
const selectOldPlanOption = "//div[@x-placement]//ul/li[2]/span";
const selectOldPlanContentOption_1 = "//span[@class='el-checkbox__inner'][1]";
const selectCompanyInput = "//div[@class='right']//form/div[2]//input[1]";
const selectCompanyOption = "//div[@x-placement]/div[1]/div[1]/ul/li[1]/span";
const mock = require('../../mock/mock.js');
const createOrderBtn = "//div[@class='right']//form//button/span[text()='提交']";
module.exports = {
    'create with copy from old plan order in youqikang': function (client) {

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
            .assert.urlEquals(client.launchUrl)

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

            //新建方案
            .click(selectCurrentPlan)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddSelectPlanOrder')
            .setValue(PlanNameInput,'test_plan_name')
            .click(selectOldPlanInput)
            .waitForElementVisible(selectOldPlanOption, mock.pauseTime)
            .click(selectOldPlanOption)
            .waitForElementVisible(selectOldPlanContentOption_1, mock.pauseTime)
            .click(selectOldPlanContentOption_1)

            //选择客户
            .click(selectCompanyInput)
            .click(selectCompanyOption)
            .pause(mock.pauseTime)

            //输入订单名称
            .waitForElementVisible(createOrderBtn, mock.pauseTime)
            .click(createOrderBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/OrderMange')
            .saveScreenshot('reports/after_create_order.png') // 截屏
            .end()
    }
}
