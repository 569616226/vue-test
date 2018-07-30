// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const companyMangeNav = "//div[@class='left']//span[text()='客户管理']";
const companyNameLink = "//table/tbody/tr[1]/td[1]/div[1]/div[1]/b";
const companyDetailDiv = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[1]/span[text()='企业信息详情']";
const mock = require('../../mock/mock.js');

module.exports = {
    'get company in youqikang': function (client) {

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

            //账号管理
            .useXpath()
            .waitForElementVisible(companyMangeNav, pauseTime)
            .click(companyMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerMange')
            .click(companyNameLink)
            .waitForElementVisible(companyDetailDiv, pauseTime)

            .saveScreenshot('reports/find_company.png') // 截屏
            .end()
    }
}
