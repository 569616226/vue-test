// const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
// const editParentPlanBtn = "//div[@class='right']/div[1]/div[2]//table[1]/tbody/tr[1]/td[4]//span[text()='编辑']";
//
// const createPlanQuestionBtn = "//div[@class='right']/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/button/span[text()='新增问题']";
//
// const planDepartNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
// const editAnswerBtnOne = "//div[@class='right']//form/div[2]//input[@readonly][1]";
// const editAnswerBtnOneOption = "//div[@x-placement]/div[1]/div[1]/ul/li[1]/span";
// const editAnswerBtnTwo = "//div[@class='right']//form/div[2]//input[@readonly][last()]";
// const editAnswerBtnTwoOption = "//div[@x-placement]/div[1]/div[1]/ul/li[2]/span";
// const submitBtn = "//button/span[text()='提交']";
// const mock = require('../../../../mock/mock.js');
//
// module.exports = {
//     'get create_parent_plan_question in youqikang': function (client) {
//
//         // 启动浏览器并打开http://admin.check.elinkport.com
//         client.url(client.launchUrl).maximizeWindow()
//         //登陆
//             .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
//             .waitForElementVisible(mock.nameInput, mock.pauseTime)
//             .setValue(mock.nameInput, mock.super_admin)//输入账号
//             .waitForElementVisible(mock.pwdInput, mock.pauseTime)
//             .setValue(mock.pwdInput, mock.super_admin_password)//输入密码
//             .click(mock.loginBtn)//点击登陆
//             .waitForElementVisible(mock.homePageText, mock.pauseTime)
//             .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
//             .assert.urlEquals(client.launchUrl)
//
//         //诊断标准管理
//             .useXpath()
//             .waitForElementVisible(planMangeNav, mock.pauseTime)
//             .click(planMangeNav)
//             .pause(mock.pauseTime)
//             .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')
//
//         //编辑
//             .waitForElementVisible(editParentPlanBtn, mock.pauseTime)
//             .click(editParentPlanBtn)
//             .assert.urlContains('Mange/EditDiagnose')
//
//         //新增问题
//             .click(createPlanQuestionBtn)
//             .pause(100000)
//             .assert.urlContains('Mange/AddQuestion')
//         //
//         // //输入问题名称
//         //     .waitForElementVisible(planDepartNameInput, mock.pauseTime)
//         //     .setValue(planDepartNameInput, mock.name)
//         //
//         //     .click(editAnswerBtnOne)//新增问题
//         //     .pause(mock.pauseTime)
//         //     .click(editAnswerBtnOneOption)//新增问题
//         //     .pause(mock.pauseTime)
//         //     .click(editAnswerBtnTwo)//新增问题
//         //     .pause(mock.pauseTime)
//         //     .click(editAnswerBtnTwoOption)//新增问题
//         //
//         //     .waitForElementVisible(submitBtn, mock.pauseTime)
//         //     .click(submitBtn)
//         //     .pause(mock.pauseTime)
//         //     .assert.urlContains('Mange/EditDiagnose')
//
//             .saveScreenshot('reports/create_parent_plan_question.png') // 截屏
//             .end()
//     }
// }
