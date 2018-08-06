const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const editParentPlanBtn = "//div[@class='right']/div[1]/div[3]//table[1]/tbody/tr[1]/td[4]//span[text()='编辑']";
const editQuestionPlanBtn = "//table/tbody/tr[1]/td[3]/div[1]/div[1]//span[1]";
const planDisPlayNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const editAnswerBtnOne = "//div[@class='right']//form/div[2]//input[@readonly][1]";
const editAnswerBtnOneOption = "//div[@x-placement]/div[1]/div[1]/ul/li[1]/span";
const editAnswerBtnTwo = "//div[@class='right']//form/div[2]//input[@readonly][last()]";
const editAnswerBtnTwoOption = "//div[@x-placement]/div[1]/div[1]/ul/li[2]/span";
const submitBtn = "//div[@class='right']//form/div[3]/div[1]/button[1]/span[text()='提交']";
const mock = require('../../../../mock/mock.js');

module.exports = {
    'get edit_plan_question in youqikang': function (client) {

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

        //诊断标准管理
            .useXpath()
            // .waitForElementVisible(planMangeNav, mock.pauseTime)
            .click(planMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

        //编辑
        //     .waitForElementVisible(editParentPlanBtn, mock.pauseTime)
            .click(editParentPlanBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditDiagnose')

        //编辑问题
        //     .waitForElementVisible(editQuestionPlanBtn, mock.pauseTime)
            .click(editQuestionPlanBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditQuestion')

            .click(mock.backIcon)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditDiagnose')

        //编辑问题
        //     .waitForElementVisible(editQuestionPlanBtn, mock.pauseTime)
            .click(editQuestionPlanBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditQuestion')

            .click(mock.backBtn)
            .pause(mock.pauseTime)

            .click(mock.e_closeIcon)
            .pause(mock.pauseTime)

            .click(mock.backBtn)
            .pause(mock.pauseTime)

            .click(mock.cancelBtn)
            .pause(mock.pauseTime)

            .click(mock.backBtn)
            .pause(mock.pauseTime)

            .click(mock.cancelBtn)
            .pause(mock.confirmBtn)

            .assert.urlContains('Mange/EditDiagnose')

        //     .waitForElementVisible(editQuestionPlanBtn, mock.pauseTime)
            .click(editQuestionPlanBtn)
            .pause(mock.pauseTime)
            .assert.urlContains('Mange/EditQuestion')

        //输入库名称
        //     .waitForElementVisible(planDisPlayNameInput, mock.pauseTime)
            .clearValue(planDisPlayNameInput)
            .pause(mock.pauseTime)
            .setValue(planDisPlayNameInput, mock.cname)

            .click(editAnswerBtnOne)//新增问题
            .pause(mock.pauseTime)

            .click(editAnswerBtnOneOption)//新增问题
            .pause(mock.pauseTime)

            .click(editAnswerBtnTwo)//新增问题
            .pause(mock.pauseTime)

            .click(editAnswerBtnTwoOption)//新增问题
            .pause(mock.pauseTime)
            // .waitForElementVisible(submitBtn, mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)

            .assert.urlContains('Mange/EditDiagnose')

            .saveScreenshot('reports/edit_plan_question.png') // 截屏
            .end()
    }
}
