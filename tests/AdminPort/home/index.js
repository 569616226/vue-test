const homeNavBtn = "//div[@class='left']/div[1]/ul/li[1]/span";
const createOrderBtn = "//p[text()='新建订单']";
const createPlanBtn = "//p[text()='新建诊断方案']";
const createCompanyBtn = "//p[text()='新建客户']";
const createClientBtn = "//p[text()='新建客户联系人']";
const mock = require('../../mock/mock.js');

module.exports = {
'get home in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
        //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入账号
            .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.loginBtn)//点击登陆
            .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //点击新建订单
            .useXpath()
            .waitForElementVisible(createOrderBtn, mock.pauseTime)
            .click(createOrderBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/SelectPlan')

            .waitForElementVisible(homeNavBtn, mock.pauseTime)
            .click(homeNavBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl)

            .waitForElementVisible(createPlanBtn, mock.pauseTime)
            .click(createPlanBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddDiagnose')

            .waitForElementVisible(homeNavBtn, mock.pauseTime)
            .click(homeNavBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl)

            .waitForElementVisible(createCompanyBtn, mock.pauseTime)
            .click(createCompanyBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomer')

            .waitForElementVisible(homeNavBtn, mock.pauseTime)
            .click(homeNavBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl)

            .waitForElementVisible(createClientBtn, mock.pauseTime)
            .click(createClientBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomerContact')

            .saveScreenshot('reports/homes.png') // 截屏

            .end()
    }
}
