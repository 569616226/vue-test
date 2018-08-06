const clientMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
const clientNameLink = "//table/tbody/tr[1]/td[1]/div[1]/div[1]/b";
const clientDetailDiv = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[1]/span[text()='客户联系人详情']";
const cancelBtn = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[3]//button[1]/span";
const editBtn = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[3]//button[2]/span";
const mock =require('../../../mock/mock.js');

module.exports = {
    'get client in youqikang': function (client) {
        // 启动浏览器并打开http://admin.check.elinkport.com
        client
            .url(client.launchUrl).maximizeWindow()

            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            // .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入账号

            // .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码

            .click(mock.loginBtn)//点击登陆
            // .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .pause(mock.pauseTime)

            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            //.assert.urlEquals(client.launchUrl)

            //客户联系人管理
            .useXpath()
            // .waitForElementVisible(clientMangeNav, mock.pauseTime)
            .click(clientMangeNav)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            .click(clientNameLink)
            .waitForElementVisible(clientDetailDiv, mock.pauseTime)

            /*关闭icon*/
            .click(mock.r_closeIcon)
            .waitForElementNotVisible(clientDetailDiv, mock.pauseTime)

            .click(clientNameLink)
            .waitForElementVisible(clientDetailDiv, mock.pauseTime)

            /*取消按钮*/
            .click(cancelBtn)
            .waitForElementNotVisible(clientDetailDiv, mock.pauseTime)

            .click(clientNameLink)
            .waitForElementVisible(clientDetailDiv, mock.pauseTime)

            /*编辑按钮*/
            .click(editBtn)
            .pause(mock.pauseTime)

            .assert.urlContains('Mange/EditCustomerContact')

            .saveScreenshot('reports/find_client.png') // 截屏
            .end()
    }
};
