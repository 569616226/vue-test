const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const editPlanBtn = "//div[@class='right']/div[1]/div[2]//table[1]/tbody/tr[1]/td[4]//span[text()='编辑']";
const planDepartMangeBtn = "//div[@class='right']//span[text()='管理部门']";
const creatPlanDepartBtn = "//button/span[text()='新建部门']";
const planDepartNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../../../mock/mock.js');

module.exports = {
    'get create_parent_plan_depart in youqikang': function (client) {

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
            .waitForElementVisible(editPlanBtn, pauseTime)
            .click(editPlanBtn)
            .assert.urlContains('Mange/EditDiagnose')

        //管理部门
            .waitForElementVisible(planDepartMangeBtn, pauseTime)
            .click(planDepartMangeBtn)
            .pause(pauseTime)
            .assert.urlContains('Mange/DepartsMange')

        //新建部门
            .waitForElementVisible(creatPlanDepartBtn, pauseTime)
            .click(creatPlanDepartBtn)
            .assert.urlContains('Mange/AddDeparts')

        //输入部门名称
            .waitForElementVisible(planDepartNameInput, pauseTime)
            .setValue(planDepartNameInput, mock.name)

            //上传图片，直接插入img element
            // .waitForElementVisible(planNameInput, pauseTime)
            // .setValue(planNameInput,mock.cname)

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlContains('Mange/DepartsMange')

            .saveScreenshot('reports/create_parent_plan_depart.png') // 截屏
            .end()
    }
}