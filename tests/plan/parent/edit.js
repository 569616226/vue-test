
// 定义页面元素
const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const editPlanBtn = "//table/tbody/tr[1]/td[4]//span[text()='编辑']";
const planNameEditBtn = "//i[@class='iconfont icon-ic_border_color cursor']";
const planNameEditDiv = "//div[@class='right']//div[@class='el-dialog__wrapper']/div[1]/div[1]/span[text()='修改库名称']";
const planDisPlayNameInput = "//div[@class='right']//div[@class='el-dialog__wrapper']//input[@type='text']";
const submitBtn = "//div[@class='right']//div[@class='el-dialog__wrapper']/div[1]/div[3]/span[1]/button[2]/span[text()='提 交']";
const mock = require('../../../mock/mock.js');

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
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

            //编辑
            .waitForElementVisible(editPlanBtn, pauseTime)
            .click(editPlanBtn)
            .assert.urlContains('Mange/EditDiagnose')

            //点击编辑名称按钮
            .waitForElementVisible(planNameEditBtn, pauseTime)
            .click(planNameEditBtn)

            .waitForElementVisible(planNameEditDiv, pauseTime)
            .click(planNameEditDiv)

            //输入库名称
            .waitForElementVisible(planDisPlayNameInput, pauseTime)
            .clearValue(planDisPlayNameInput)
            .setValue(planDisPlayNameInput,mock.cname)

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/DiagnoseMange')

            .saveScreenshot('reports/edit_plan.png') // 截屏
            .end()
    }
}
