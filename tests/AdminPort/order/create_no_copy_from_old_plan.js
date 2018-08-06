
const OrderMangeNav = "//span[text()='订单管理']";
const createOrder = "//span[text()='新建订单']";
const selectCurrentPlan = "//p[text()='新建方案']";
const PlanNameInput = "//div[@class='right']//form/div[1]//input[1]";
const selectOldPlanType = "//div[@class='right']//form//div[@role='radiogroup']/label[@role='radio'][2]";
const selectOldPlanContentOption_1 = "//span[@class='el-checkbox__inner'][1]";
const selectCompanyInput = "//div[@class='right']//form/div[2]//input[1]";
const selectCompanyOption = "//div[@x-placement]/div[1]/div[1]/ul/li[1]/span";
const mock =require('../../../mock/mock.js');
const createOrderBtn = "//div[@class='right']//form//button/span[text()='提交']";

module.exports = {
'create no copy from old plan order in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()

            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入用户名
            .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.loginBtn)//登陆
            .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            //.assert.urlEquals(client.launchUrl)

            //点击订单管理
            .useXpath()
            .click(OrderMangeNav)//点击订单管理
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/OrderMange')
            .waitForElementVisible(createOrder, mock.pauseTime)

            //点击新建订单
            .click(createOrder)//点击新建订单
            .assert.urlEquals(client.launchUrl + 'Mange/SelectPlan')
            .waitForElementVisible(selectCurrentPlan, mock.pauseTime)

            //新建方案
            .click(selectCurrentPlan)//点击新建方案
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/AddSelectPlanOrder')
            .setValue(PlanNameInput,'test_plan_name')//输入方案名称
            .waitForElementVisible(selectOldPlanType, mock.pauseTime)
            .click(selectOldPlanType)//点击不复制
            .waitForElementVisible(selectOldPlanContentOption_1, mock.pauseTime)
            .click(selectOldPlanContentOption_1)
            .waitForElementVisible(selectCompanyInput, mock.pauseTime)

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
