const clientMangeNav = "//div[@class='left']//span[text()='客户联系人管理']";
const frozenClientBtn = "//table/tbody/tr[1]/td[last()]/div[1]/div[1]//span[2]";
const mock =require('../../../mock/mock.js');

module.exports = {
    'get frozen_admin in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            // .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入账号

            // .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码
            .click(mock.loginBtn)//点击登陆

            .pause(mock.pauseTime)

            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            //.assert.urlEquals(client.launchUrl)

            //客户联系人管理
            .useXpath()
            // .waitForElementVisible(clientMangeNav, mock.pauseTime)
            .click(clientMangeNav)

            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/CustomerContactMange')

            //冻结
        //冻结
            .assert.containsText(frozenClientBtn, "冻结")
            .click(frozenClientBtn)
            .pause(mock.pauseTime)

            //取消
            .click(mock.cancelBtn)
            .pause(mock.pauseTime)

            //冻结
            .assert.containsText(frozenClientBtn, "冻结")
            .click(frozenClientBtn)
            .pause(mock.pauseTime)

            // 确定
            .click(mock.confirmBtn)
            .pause(mock.pauseTime)

            .assert.containsText(frozenClientBtn, "解冻")
            .click(frozenClientBtn)
            .pause(mock.pauseTime)

            // 取消
            .click(mock.cancelBtn)
            .pause(mock.pauseTime)

            .assert.containsText(frozenClientBtn, "解冻")
            .click(frozenClientBtn)
            .pause(mock.pauseTime)

            // 确定
            .click(mock.confirmBtn)
            .pause(mock.pauseTime)
            .assert.containsText(frozenClientBtn, "冻结")


            .saveScreenshot('reports/frozen_client.png') // 截屏
            .end()
    }
}
