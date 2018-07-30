// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const OrderMangeNav = "//span[text()='订单管理']";
const createOrder = "//span[text()='新建订单']";
const selectCurrentPlan = "//p[text()='选择现有方案']";
const createCompanyInCreateOrder = "//div[@class='right']//form[1]/div[2]//span[text()='新建客户']";
const companyNameInput = "//div[@class='el-dialog__wrapper'][1]//form/div[1]//input[1]";
const clientSelectInput = "//div[@class='el-dialog__wrapper'][1]//form/div[2]/div[1]/div[1]/div[2]//input";
const clientSelectOption_1 = "//div[@x-placement]//ul/li[2]/span";
const clientSelectOption_2 = "//div[@x-placement]//ul/li[1]/span";
const createCompanyInCreateOrderBtn = "//div[@class='right']/div[1]/div[3]/div[1]/div[3]//button/span[text()='提交']";
const mock = require('../../mock/mock.js');

module.exports = {
    'create company in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(nameInput, pauseTime)
            .setValue(nameInput, mock.super_admin)
            .waitForElementVisible(pwdInput, pauseTime)
            .setValue(pwdInput, mock.super_admin_password)
            .click(loginBtn)
            .waitForElementVisible(homePageText, pauseTime)
            .assert.containsText(homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //点击订单管理
            .useXpath()
            .click(OrderMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/OrderMange')
            .waitForElementVisible(createOrder, pauseTime)

            //点击新建订单
            .click(createOrder)
            .assert.urlEquals(client.launchUrl + 'Mange/SelectPlan')
            .waitForElementVisible(selectCurrentPlan, pauseTime)

            //新建客户
            .click(selectCurrentPlan)
            .waitForElementVisible(createCompanyInCreateOrder, pauseTime)
            .click(createCompanyInCreateOrder)
            .waitForElementVisible(companyNameInput, pauseTime)
            .setValue(companyNameInput,mock.company_name)
            .click(clientSelectInput)
            .waitForElementVisible(clientSelectOption_1, pauseTime)
            .click(clientSelectOption_1)
            .click(clientSelectOption_2)
            .waitForElementVisible(createCompanyInCreateOrderBtn, pauseTime)
            .click(createCompanyInCreateOrderBtn)

            .saveScreenshot('reports/create_company_in_create_order.png') // 截屏

            .waitForElementNotVisible(createCompanyInCreateOrderBtn, pauseTime)
            .end()
    }
}
