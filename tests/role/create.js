module.exports = {
    'get create_role in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const roleMangeNav = "//div[@class='left']//span[text()='角色管理']";
        const createRoleBtn = "//button/span[text()='新建角色']";
        const rolenameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
        const roleNameInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
        const submitBtn = "//button/span[text()='提交']";

        // 启动浏览器并打开http://role.check.elinkport.com
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

            //角色管理
            .useXpath()
            .waitForElementVisible(roleMangeNav, pauseTime)
            .click(roleMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/RoleMange')

            //新建角色
            .waitForElementVisible(createRoleBtn, pauseTime)
            .click(createRoleBtn)
            .assert.urlEquals(client.launchUrl + 'SetUp/AddRole')

            //输入角色名
            .waitForElementVisible(rolenameInput, pauseTime)
            .setValue(rolenameInput,'testRole' + Math.floor(Math.random() * 100))

            //输入标识
            .waitForElementVisible(roleNameInput, pauseTime)
            .setValue(roleNameInput,'testRoleName')

            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/RoleMange')
            
            .saveScreenshot('reports/create_role.png') // 截屏
            .end()
    }
}
