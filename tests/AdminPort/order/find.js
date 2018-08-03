const OrderMangeNav = "//span[text()='订单管理']";
const orderNameLink = "//table/tbody/tr[1]/td[1]/div[1]/div[1]/b";
const orderDetailDiv = "//div[@class='right']//div[@class='el-dialog__wrapper previewcol']/div[1]/div[1]/span[text()='项目详情']";
const mock =require('../../../mock/mock.js');

module.exports = {
'order find_order in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
        //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)
            .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)
            .click(mock.loginBtn)
            .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

        //点击订单管理
            .useXpath()
            .waitForElementVisible(OrderMangeNav, mock.pauseTime)
            .click(OrderMangeNav)
            .pause(mock.pauseTime)
            .assert.urlEquals(client.launchUrl + 'Mange/OrderMange')
            .click(orderNameLink)
            .waitForElementVisible(orderDetailDiv, mock.pauseTime)

            .saveScreenshot('reports/order.png') // 截屏
            .end()
    }
}
