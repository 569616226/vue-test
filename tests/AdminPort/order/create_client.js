
const OrderMangeNav = "//span[text()='订单管理']";
const createOrder = "//span[text()='新建订单']";
const selectCurrentPlan = "//p[text()='选择现有方案']";
const createCompanyInCreateOrder = "//div[@class='right']//form[1]/div[2]//span[text()='新建客户']";
const createClientLink = "//div[@class='el-dialog__wrapper'][1]//form/div[2]//span[text()='新建联系人']";
const clientNameInput = "//body/div[@class='el-dialog__wrapper']//form/div[1]//input[1]";
const clientPhoneInput = "//body/div[@class='el-dialog__wrapper']//form/div[2]//input[1]";
const companySelectInput = "//body/div[@class='el-dialog__wrapper']//form//input[@placeholder='请选择企业']";
const companySelectOption_1 = "//div[@x-placement]//ul/li[1]/span";
const companySelectOption_2 = "//div[@x-placement]//ul/li[2]/span";
const createClientInCreateOrderBtn = "//body/div[@class='el-dialog__wrapper']//button/span[text()='提交']";
const mock =require('../../../mock/mock.js');

module.exports = {
    'create client in youqikang': function (client) {


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

            //新建客户
            .click(selectCurrentPlan)
            .waitForElementVisible(createCompanyInCreateOrder, mock.pauseTime)
            .click(createCompanyInCreateOrder)

            //新建联系人
            .waitForElementVisible(createClientLink, mock.pauseTime)
            .click(createClientLink)

            .waitForElementVisible(clientNameInput, mock.pauseTime)

            .setValue(clientNameInput,mock.name)
            .setValue(clientPhoneInput,mock.tel)

            .click(companySelectInput)

            .waitForElementVisible(companySelectOption_1, mock.pauseTime)
            .click(companySelectOption_1)
            .click(companySelectOption_2)

            .click(clientPhoneInput)

            .waitForElementVisible(createClientInCreateOrderBtn, mock.pauseTime)

            .click(createClientInCreateOrderBtn)

            // .waitForElementVisible(createClientLink, mock.pauseTime)

            .saveScreenshot('reports/create_client_in_create_order.png') // 截屏
            .end()
    }
}
