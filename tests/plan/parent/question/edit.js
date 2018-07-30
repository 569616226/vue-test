// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const editParentPlanBtn = "//div[@class='right']/div[1]/div[2]//table[1]/tbody/tr[1]/td[4]//span[text()='编辑']";
const editQuestionPlanBtn = "//table/tbody/tr[1]/td[3]/div[1]/div[1]//span[1]";
const planDisPlayNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const editAnswerBtnOne = "//div[@class='right']//form/div[2]//input[@readonly][1]";
const editAnswerBtnOneOption = "//div[@x-placement]/div[1]/div[1]/ul/li[1]/span";
const editAnswerBtnTwo = "//div[@class='right']//form/div[2]//input[@readonly][last()]";
const editAnswerBtnTwoOption = "//div[@x-placement]/div[1]/div[1]/ul/li[2]/span";
const submitBtn = "//div[@class='right']//form/div[3]/div[1]/button[1]/span[text()='提交']";
const mock = require('../../../../mock/mock.js');

module.exports = {
    'get edit_parent_plan_question in youqikang': function (client) {

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
        //
            .waitForElementVisible(editQuestionPlanBtn, pauseTime)
            .click(editQuestionPlanBtn)
            .assert.urlContains('Mange/EditQuestion')

        //输入库名称
            .waitForElementVisible(planDisPlayNameInput, pauseTime)
            .clearValue(planDisPlayNameInput)
            .pause(pauseTime)
            .setValue(planDisPlayNameInput, mock.cname)

            .click(editAnswerBtnOne)//新增问题
            .pause(pauseTime)
            .click(editAnswerBtnOneOption)//新增问题
            .pause(pauseTime)
            .click(editAnswerBtnTwo)//新增问题
            .pause(pauseTime)
            .click(editAnswerBtnTwoOption)//新增问题

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)

            .assert.urlContains('Mange/EditDiagnose')

            .saveScreenshot('reports/edit_parent_plan_question.png') // 截屏
            .end()
    }
}
