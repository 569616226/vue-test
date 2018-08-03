const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const editPlanBtn = "//div[@class='right']/div[1]/div[2]//table[1]/tbody/tr[1]/td[4]//span[text()='编辑']";
const planDepartMangeBtn = "//div[@class='right']//span[text()='管理部门']";
const delPlanBtn = "//table/tbody/tr[1]/td[2]/div[1]/div[1]//span[2]";
const confirmBtn = "//body/div[last()-1]/div[1]/div[3]/button[2]/span";
const mock = require('../../../../../mock/mock.js');

module.exports = {
    'get del_parent_plan_depart in youqikang': function (client) {

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

        //诊断标准管理
            .useXpath()
            .waitForElementVisible(planMangeNav, mock.pauseTime)
            .click(planMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

        //编辑
            .waitForElementVisible(editPlanBtn, mock.pauseTime)
            .click(editPlanBtn)
            .assert.urlContains('Mange/EditDiagnose')

        //管理部门
            .waitForElementVisible(planDepartMangeBtn, mock.pauseTime)
            .click(planDepartMangeBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/DepartsMange')

        //删除
            .assert.containsText(delPlanBtn, "删除")
            .click(delPlanBtn)
            .pause(mock.pauseTime)
            .click(confirmBtn)
            .pause(mock.pauseTime)

            .saveScreenshot('reports/del_parent_plan_depart.png') // 截屏
            .end()
    }
}
