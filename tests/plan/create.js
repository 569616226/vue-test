const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const creatPlanBtn = "//button/span[text()='新增方案']";
const PlanNameInput = "//div[@class='right']//form/div[1]//input[1]";
const selectOldPlanType = "//div[@class='right']//form//div[@role='radiogroup']/label[@role='radio'][2]";
const selectOldPlanContentOption_1 = "//span[@class='el-checkbox__inner'][1]";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../mock/mock.js');

module.exports = {
    'get create_plan in youqikang': function (client) {

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

            //方案管理
            .useXpath()
            .waitForElementVisible(planMangeNav, pauseTime)
            .click(planMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

            //新建方案
            .waitForElementVisible(creatPlanBtn, pauseTime)
            .click(creatPlanBtn)
            .assert.urlEquals(client.launchUrl + 'Mange/AddDiagnose')

            .setValue(PlanNameInput,'test_plan_name')//输入方案名称
            .waitForElementVisible(selectOldPlanType, pauseTime)
            .click(selectOldPlanType)//点击不复制
            .waitForElementVisible(selectOldPlanContentOption_1, pauseTime)
            .click(selectOldPlanContentOption_1)

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')
            
            .saveScreenshot('reports/create_plan.png') // 截屏
            .end()
    }
}
