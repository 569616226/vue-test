module.exports = {
    'get create_admin in youqikang': function (client) {
        // 定义页面元素
        const pauseTime = 5000;
        const nameInput = "input[type=text]";
        const pwdInput = "input[type=password]";
        const loginBtn = "button[type=button]";
        const homePageText = "p.admin-home-p2";
        const userMangeNav = "//div[@class='left']//span[text()='账号管理']";
        const createAdminBtn = "//button/span[text()='新建账号']";
        const usernameInput = "//div[@class='right']//form/div[1]/div[1]/div[1]/input[@type='text']";
        const adminNameInput = "//div[@class='right']//form/div[2]/div[1]/div[1]/input[@type='text']";
        const passwordInput = "//div[@class='right']//form/div[3]/div[1]/div[1]/input[@type='text']";
        const phoneInput = "//div[@class='right']//form/div[4]/div[1]/div[1]/input[@type='text']";
        const roleSelectInput = "//div[@class='right']//form/div[5]/div[1]/div[1]/div[1]/input[@placeholder='请选择角色']";
        const roleSelectInputOption = "//div[@x-placement='top-start']/div[1]/div[1]/ul/li[3]/span";
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

            //账号管理
            .useXpath()
            .waitForElementVisible(userMangeNav, pauseTime)
            .click(userMangeNav)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

            //新建账号
            .waitForElementVisible(createAdminBtn, pauseTime)
            .click(createAdminBtn)
            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/AddUsers')

            //输入姓名
            .waitForElementVisible(usernameInput, pauseTime)
            .setValue(usernameInput,'testUser_2')

            //输入账号
            .waitForElementVisible(adminNameInput, pauseTime)
            .setValue(adminNameInput,'testUserName_3')

            //输入密码
            .waitForElementVisible(passwordInput, pauseTime)
            .setValue(passwordInput,'testUserPassword_3')

            //输入手机号
            .waitForElementVisible(phoneInput, pauseTime)
            .setValue(phoneInput,'13411108341')

            //选择角色
            .waitForElementVisible(roleSelectInput, pauseTime)
            .click(roleSelectInput)
            .waitForElementVisible(roleSelectInputOption, pauseTime)
            .click(roleSelectInputOption)
            .waitForElementVisible(submitBtn, pauseTime)
            .click(submitBtn)

            .pause(pauseTime)
            .assert.urlEquals(client.launchUrl + 'SetUp/UsersMange')

            .saveScreenshot('reports/create_admin.png') // 截屏
            .end()
    }
}
