
// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const editPlanBtn = "//table/tbody/tr[1]/td[4]//span[text()='编辑']";
const planNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const planDisPlayNameInput = "//div[@class='right']//form/div[3]/div[1]/div[1]/input[@type='text']";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../mock/mock.js');

module.exports = {
    'get edit_plan in youqikang': function (client) {

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

            //权限管理
            .useXpath()
            .waitForElementVisible(planMangeNav, pauseTime)
            .click(planMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/PlansMange')

            //编辑
            .waitForElementVisible(editPlanBtn, pauseTime)
            .click(editPlanBtn)
            .assert.urlContains('SetUp/EditPlan')

            //输入权限名
            .waitForElementVisible(planNameInput, pauseTime)
            .clearValue(planNameInput)
            .setValue(planNameInput,mock.name)

            //输入标识
            .waitForElementVisible(planDisPlayNameInput, pauseTime)
            .clearValue(planDisPlayNameInput)
            .setValue(planDisPlayNameInput,mock.cname)

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/PlansMange')

            .saveScreenshot('reports/edit_plan.png') // 截屏
            .end()
    }
}
