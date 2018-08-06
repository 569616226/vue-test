const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const creatPlanBtn = "//button/span[text()='新增方案']";
const PlanNameInput = "//div[@class='right']//form/div[1]//input[1]";
const selectOldPlanType = "//div[@class='right']//form//div[@role='radiogroup']/label[@role='radio'][2]";
const selectOldPlanContentOption_1 = "//span[@class='el-checkbox__inner'][1]";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../../mock/mock.js');

module.exports = {
    'get create_plan in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com

        client
            .url(client.launchUrl).maximizeWindow()
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
        // .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入账号

            // .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.loginBtn)//点击登陆
            .pause(mock.pauseTime)

            // .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            //.assert.urlEquals(client.launchUrl)

        //方案管理
            .useXpath()
            // .waitForElementVisible(planMangeNav, mock.pauseTime)
            .click(planMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

        //新建方案
        // .waitForElementVisible(creatPlanBtn, mock.pauseTime)
            .click(creatPlanBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddDiagnose')

            .click(mock.backIcon)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

        //新建方案
        // .waitForElementVisible(creatPlanBtn, mock.pauseTime)
            .click(creatPlanBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddDiagnose')

            .click(mock.backBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

        //新建方案
        // .waitForElementVisible(creatPlanBtn, mock.pauseTime)
            .click(creatPlanBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/AddDiagnose')

            .setValue(PlanNameInput, 'test_plan_name')//输入方案名称
            // .waitForElementVisible(selectOldPlanType, mock.pauseTime)
            .click(selectOldPlanType)//点击不复制
            .pause(mock.pauseTime)
            // .waitForElementVisible(selectOldPlanContentOption_1, mock.pauseTime)
            .click(selectOldPlanContentOption_1)
            .pause(mock.pauseTime)

            // .waitForElementVisible(submitBtn, mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

            .saveScreenshot('reports/create_plan.png') // 截屏
            .end()
    }
};
