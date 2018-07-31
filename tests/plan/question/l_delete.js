// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const editParentPlanBtn = "//div[@class='right']/div[1]/div[3]//table[1]/tbody/tr[1]/td[4]//span[text()='编辑']";
const delPlanBtn = "//table/tbody/tr[1]/td[3]//span[2]";
const confirmBtn = "//body/div[last()-1]/div[1]/div[3]/button[2]/span";
const mock = require('../../../mock/mock.js');

module.exports = {
    'get del_plan_question in youqikang': function (client) {

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

        //诊断标准管理
            .useXpath()
            .waitForElementVisible(planMangeNav, pauseTime)
            .click(planMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

        //编辑
            .waitForElementVisible(editParentPlanBtn, pauseTime)
            .click(editParentPlanBtn)
            .pause(pauseTime)
            .assert.urlContains('Mange/EditDiagnose')

        //删除
            .waitForElementVisible(delPlanBtn, pauseTime)
            .assert.containsText(delPlanBtn, "删除")
            .click(delPlanBtn)
            .pause(pauseTime)
            .click(confirmBtn)
            .pause(pauseTime)

            .saveScreenshot('reports/del_plan_question.png') // 截屏
            .end()
    }
}
