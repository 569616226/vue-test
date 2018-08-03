const planMangeNav = "//div[@class='left']//span[text()='诊断标准管理']";
const editPlanBtn = "//div[@class='right']/div[1]/div[3]//table[1]/tbody/tr[1]/td[4]//span[text()='编辑']";
const planDepartMangeBtn = "//div[@class='right']//span[text()='管理部门']";
const creatPlanDepartBtn = "//button/span[text()='新建部门']";
const planDepartNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const imageErrorDiv = "//div[@class='el-form-item__error']";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../../../mock/mock.js');


module.exports = {
    'get create_plan_depart in youqikang': function (client) {

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

        //新建部门
            .waitForElementVisible(creatPlanDepartBtn, mock.pauseTime)
            .click(creatPlanDepartBtn)
            .assert.urlContains('Mange/AddDeparts')

        //输入部门名称
            .waitForElementVisible(planDepartNameInput, mock.pauseTime)
            .setValue(planDepartNameInput, mock.name)

            /*无法测试上传图片*/
            //     .waitForElementVisible(imgUploadIcon, mock.pauseTime)
            //     .setValue(imgUploadIcon, file, function(result){
            //         if(result.status !== 0){
            //             console.log(result);
            //         }
            //     })

            .waitForElementVisible(submitBtn, mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)
            .assert.containsText(imageErrorDiv, '请选择图片')

            .saveScreenshot('reports/create_plan_depart.png') // 截屏
            .end()
    }
}
