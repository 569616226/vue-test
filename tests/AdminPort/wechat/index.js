const wechatMangeNav = "//div[@class='left']//span[text()='公众号管理']";
const contentInput = "//div[@contenteditable]";
const submitBtn = "//button/span[text()='提交']";
const mock =require('../../../mock/mock.js');
const content = '优企康，让我们的企业更健康！我们是一个覆盖过千家进出口企业的风险管理平台，专注于为企业提供从订单，生产管理，到物流，关务，财务等环节的风险管理一体化解决方案。';

module.exports = {
    'get wechat in youqikang': function (client) {

        // 启动浏览器并打开http://admin.check.elinkport.com

        client.url(client.launchUrl).maximizeWindow()
        //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            // .waitForElementVisible(mock.nameInput, mock.pauseTime)
            .setValue(mock.nameInput, mock.super_admin)//输入账号

            // .waitForElementVisible(mock.pwdInput, mock.pauseTime)
            .setValue(mock.pwdInput, mock.super_admin_password)//输入密码

            .click(mock.loginBtn)//点击登陆
            // .waitForElementVisible(mock.homePageText, mock.pauseTime)
            .pause(mock.pauseTime)

            .assert.containsText(mock.homePageText, "欢迎使用，优企康管理平台")
            .assert.urlEquals(client.launchUrl)

            //点击公众号管理
            .useXpath()
            // .waitForElementVisible(wechatMangeNav, mock.pauseTime)
            .click(wechatMangeNav)
            .pause(mock.pauseTime)

            .assert.urlEquals(client.launchUrl + 'SetUp/PubnuMange')

            .assert.containsText(contentInput, content)

            .clearValue(contentInput)
            .pause(mock.pauseTime)
            .click(contentInput)
            .pause(mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)

            .assert.containsText(contentInput, "")

            .setValue(contentInput,content)
            .pause(mock.pauseTime)
            .click(contentInput)
            .pause(mock.pauseTime)
            .click(submitBtn)
            .pause(mock.pauseTime)

            .assert.containsText(contentInput, content)

            .saveScreenshot('reports/wechat.png') // 截屏

            .end()
    }
}
