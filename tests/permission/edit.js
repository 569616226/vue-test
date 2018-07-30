module.exports = {
    'get edit_permission in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const permissionMangeNav = "//div[@class='left']//span[text()='权限管理']";
        const editPermissionBtn = "//table/tbody/tr[1]/td[4]//span[text()='编辑']";
        const permissionNameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
        const permissionDisPlayNameInput = "//div[@class='right']//form/div[3]/div[1]/div[1]/input[@type='text']";

        const submitBtn = "//button/span[text()='提交']";

        // 启动浏览器并打开http://admin.check.elinkport.com
        client.url(client.launchUrl).maximizeWindow()
            //登陆
            .assert.urlEquals(client.launchUrl + 'login?redirect=%2F')
            .waitForElementVisible(nameInput, pauseTime)
            .setValue(nameInput, 'Super Admin')//输入账号
            .waitForElementVisible(pwdInput, pauseTime)
            .setValue(pwdInput, 'admin123456')//输入密码
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

            //编辑
            .waitForElementVisible(editPermissionBtn, pauseTime)
            .click(editPermissionBtn)
            .assert.urlContains('SetUp/EditPermission')

            //输入权限名
            .waitForElementVisible(permissionNameInput, pauseTime)
            .setValue(permissionNameInput,Math.floor(Math.random() * 100))

            //输入标识
            .waitForElementVisible(permissionDisPlayNameInput, pauseTime)
            .setValue(permissionDisPlayNameInput,'1')

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/PermissionsMange')

            .saveScreenshot('reports/create_admin.png') // 截屏
            .end()
    }
}
