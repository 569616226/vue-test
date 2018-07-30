const mock = require('../../mock/mock.js');
// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const companyMangeNav = "//div[@class='left']//span[text()='客户管理']";
const createCompanyBtn = "//button/span[text()='新增客户']";
const companynameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
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
            .waitForElementVisible(nameInput, pauseTime)
            .setValue(nameInput, mock.super_admin)//输入账号
            .waitForElementVisible(pwdInput, pauseTime)
            .setValue(pwdInput, mock.super_admin_password)//输入密码
            .click(loginBtn)//点击登陆
            .waitForElementVisible(homePageText, pauseTime)
            .assert.containsText(homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //客户管理
            .useXpath()
            .waitForElementVisible(companyMangeNav, pauseTime)
            .click(companyMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')

            //新建客户
            .waitForElementVisible(createCompanyBtn, pauseTime)
            .click(createCompanyBtn)
            .assert.urlEquals(client.launchUrl + 'Mange/AddCustomer')

            //输入客户名
            .waitForElementVisible(companynameInput, pauseTime)
            .setValue(companynameInput,mock.name)

            //选择客户联系人
            .click(clientSelectInput)
            .waitForElementVisible(clientSelectOption_1, pauseTime)
            .click(clientSelectOption_1)
            .click(clientSelectOption_2)

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')
            
            .saveScreenshot('reports/create_company.png') // 截屏
            .end()
    }
}
