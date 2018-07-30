const pauseTime = 5000;
const nameInput = "input[type=text]";
const pwdInput = "input[type=password]";
const loginBtn = "button[type=button]";
const homePageText = "p.admin-home-p2";
const permissionMangeNav = "//div[@class='left']//span[text()='权限管理']";
const createPermissionBtn = "//button/span[text()='新建权限']";
const permissionRouteInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
const permissionNameInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
const permissionDisPlayNameInput = "//div[@class='right']//form/div[3]/div[1]/div[1]/input[@type='text']";
const submitBtn = "//button/span[text()='提交']";
const mock = require('../../mock/mock.js');

module.exports = {
    'get create_permission in youqikang': function (client) {

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
            .waitForElementVisible(permissionMangeNav, pauseTime)
            .click(permissionMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/PermissionsMange')

            //新建权限
            .waitForElementVisible(createPermissionBtn, pauseTime)
            .click(createPermissionBtn)
            .assert.urlEquals(client.launchUrl + 'SetUp/AddPermissions')

            //输入权限名
            .waitForElementVisible(permissionRouteInput, pauseTime)
            .setValue(permissionRouteInput,mock.name)

            //输入标识
            .waitForElementVisible(permissionNameInput, pauseTime)
            .setValue(permissionNameInput,mock.cname)

            //输入标识
            .waitForElementVisible(permissionDisPlayNameInput, pauseTime)
            .setValue(permissionDisPlayNameInput,mock.cname)

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/PermissionsMange')
            
            .saveScreenshot('reports/create_permission.png') // 截屏
            .end()
    }
}
