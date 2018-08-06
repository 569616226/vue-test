const OrderMangeNav = "//span[text()='订单管理']";
const editOrder = "//table//tr[1]/td//span[text()='编辑']";
const PlanInfo = "//div[text()='方案信息']";

const viewInfoBtn = "//span[@class='AddSelectPlan-show']";
const viewInfoDiv = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][1]";
const closePlanViewBtn = "//div[@class='el-dialog__wrapper'][1]//button/span[text()='关 闭']";

const addQuestionBtn = "//div[@role='treeitem']/div/span[2]/span[2]/i[1]";
const addQuestionDiv = "//div[@class='el-dialog__wrapper'][3]";
const addQuestionInput = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][last()]//input[@placeholder='请输入']";
const addAnswerBtnOne = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][last()]//input[@readonly][1]";
const addAnswerBtnOneOption = "//div[@x-placement]//ul/li[2]/span";
const addAnswerBtnTwo = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][last()]//form/div[2]/div[1]/div[2]//input[@readonly][last()]";
const addAnswerBtnTwoOption = "//div[@x-placement]//ul/li[2]/span";
const addSubmitBtn = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][last()]//button/span[text()='提交']";

const editDepartBtn = "//div[@role='treeitem']/div/span[2]/span[2]/i[2]";
const editDepartDiv = "//div[@class='el-dialog__wrapper'][2]";
const editDepartInput = "//div[@class='el-dialog__wrapper'][2]//input";
const editDepartSubmitBtn = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][2]//button/span[text()='提交']";

const editQuestionBtn = "//div[@role='group']//div[@role='treeitem'][1]/div/span[2]/span[2]/i[1]";
const editQuestionDiv = "//div[@class='el-dialog__wrapper'][2]";
const editQuestionInput = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][2]//input[@placeholder='请输入']";
const editAnswerBtnOne = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][2]//input[@readonly][1]";
const editAnswerBtnOneOption = "//div[@x-placement]/div[1]/div[1]/ul/li[1]/span";
const editAnswerBtnTwo = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][2]//form/div[1]/div[2]/div[1]/div[2]//input[@readonly][last()]";
const editAnswerBtnTwoOption = "//div[@x-placement]/div[1]/div[1]/ul/li[2]/span";
const editSubmitBtn = "//div[@id='pane-1']//div[@class='el-dialog__wrapper'][2]//button/span[text()='提交']";
const delQuestionBtn = "//div[@role='group']//div[@role='treeitem'][1]/div/span[2]/span[2]/i[2]";
const cofirmDelBtn = "//body/div[last()-1]/div[1]/div[3]/button[2]/span";
const cancelDelBtn = "//body/div[last()-1]/div[1]/div[3]/button[1]/span";
const delDepartBtn = "//div[@role='treeitem']/div/span[2]/span[2]/i[last()]";
const mock =require('../../../mock/mock.js');

module.exports = {
    'edit plan in edit order in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)
            .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)
            .click(mock.loginBtn)
            .pause(mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            //.assert.urlEquals(client.launchUrl)

            //点击订单管理
            .useXpath()
            .click(OrderMangeNav)
            .pause(mock.pauseTime)
            .assert.urlContains(client.launchUrl + 'Mange/OrderMange')
            .waitForElementVisible(editOrder, mock.pauseTime)

            //点击编辑
            .click(editOrder)
            .pause(mock.pauseTime)
            .assert.urlContains(client.launchUrl + 'Mange/EditSelectPlanOrder')
            .waitForElementVisible(PlanInfo, mock.pauseTime)

            //点击方案信息
            .click(PlanInfo)
            .waitForElementVisible(viewInfoBtn, mock.pauseTime)
            .click(viewInfoBtn)//点击方案预览
            .waitForElementVisible(closePlanViewBtn, mock.pauseTime)
            .click(closePlanViewBtn)
            .pause(mock.pauseTime)
            .assert.cssProperty(viewInfoDiv, 'display', 'none')

            .click(addQuestionBtn)//新增问题
            .waitForElementVisible(addQuestionDiv, mock.pauseTime)
            .setValue(addQuestionInput, mock.name)
            .click(addAnswerBtnOne)//新增问题
            .click(addAnswerBtnOneOption)//新增问题
            .pause(mock.pauseTime)
            .click(addAnswerBtnTwo)//新增问题
            .click(addAnswerBtnTwoOption)//新增问题
            .pause(mock.pauseTime)


            .click(addSubmitBtn)//新增问题
            .pause(mock.pauseTime)
            .assert.cssProperty(addQuestionDiv, 'display', 'none')

            .click(editDepartBtn)//编辑部门
            .assert.cssClassNotPresent(editDepartDiv, 'display')
            .clearValue(editDepartInput)
            .pause(mock.pauseTime)
            .setValue(editDepartInput, mock.name)
            /*.assert.value(editDepartInput, 'display')*/
            .waitForElementVisible(editDepartSubmitBtn, mock.pauseTime)
            .click(editDepartSubmitBtn)
            .pause(mock.pauseTime)
            .assert.cssProperty(editDepartDiv, 'display', 'none')

            .click(editQuestionBtn)//编辑问题
            .setValue(editQuestionInput, mock.name)
            .click(editAnswerBtnOne)//新增问题
            .pause(mock.pauseTime)
            .click(editAnswerBtnOneOption)//新增问题
            .pause(mock.pauseTime)
            .click(editAnswerBtnTwo)//新增问题
            .pause(mock.pauseTime)
            .click(editAnswerBtnTwoOption)//新增问题
            .pause(mock.pauseTime)
            .waitForElementVisible(editSubmitBtn, mock.pauseTime)
            .click(editSubmitBtn)//新增问题
            .pause(mock.pauseTime)
            .assert.cssProperty(editQuestionDiv, 'display', 'none')

            .waitForElementVisible(delQuestionBtn, mock.pauseTime)
            .click(delQuestionBtn)//删除问题
            .click(cofirmDelBtn)//确定删除

            .waitForElementVisible(delDepartBtn, mock.pauseTime)
            .click(delDepartBtn)//删除部门
            .click(cancelDelBtn)//取消删除

            .saveScreenshot('reports/edit_plan_in_edit_order.png') // 截屏
            .end()
    }
}
