const mock = require('../../../mock/mock.js');
const companyMangeNav = "//div[@class='left']//span[text()='客户管理']";
const createCompanyBtn = "//button/span[text()='新增客户']";
const companyNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const clientSelectInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/div[1]/input[@type='text']";
const clientSelectOption_1 = "//div[@x-placement]//ul/li[2]/span";
const clientSelectOption_2 = "//div[@x-placement]//ul/li[1]/span";
const submitBtn = "//button/span[text()='提交']";

module.exports = {
    'get create_company in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
        //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
        // .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入账号

            // .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.loginBtn)//点击登陆
            .pause(mock.pauseTime)

            // .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

        //客户管理
            .useXpath()
            // .waitForElementVisible(companyMangeNav, mock.pauseTime)
            .click(companyMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')

        //新建客户
        // .waitForElementVisible(createCompanyBtn, mock.pauseTime)
            .click(createCompanyBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomer')

        /*返回Icon*/
            .click(mock.backIcon)
            .pause(mock.pauseTime)

            //新建客户
            // .waitForElementVisible(createCompanyBtn, mock.pauseTime)
            .click(createCompanyBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomer')

        /*返回Icon*/
            .click(mock.backBtn)
            .pause(mock.pauseTime)

            //新建客户
            // .waitForElementVisible(createCompanyBtn, mock.pauseTime)
            .click(createCompanyBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomer')

        //输入客户名
        // .waitForElementVisible(companyNameInput, mock.pauseTime)
            .setValue(companyNameInput, mock.name)

            //选择客户联系人
            .click(clientSelectInput)
            // .waitForElementVisible(clientSelectOption_1, mock.pauseTime)
            .pause(mock.pauseTime)
            .click(clientSelectOption_1)
            .click(clientSelectOption_2)

            // .waitForElementVisible(submitBtn, mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')

            .saveScreenshot('reports/create_company.png') // 截屏
            .end()
    }
}
