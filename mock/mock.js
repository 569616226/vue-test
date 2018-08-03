const Mock = require('mockjs');

Mock.Random.cname();
var cname = Mock.mock('@cname');

Mock.Random.name();
var name = Mock.mock('@name');

Mock.Random.word(6);
var password = Mock.mock('@word(6)');

Mock.Random.integer(60, 100);
var tel = '134' + Mock.mock('@integer(10000000, 99999999)');

Mock.Random.cname();
var company_name = Mock.mock('@cname') + '有限公司';

module.exports = {
    cname: cname,
    name: name,
    password: password,
    tel: tel,
    company_name: company_name,
    super_admin: 'Super Admin',
    super_admin_password: 'admin123456',

    //通用元素
    alertDiv: "//div[@role='alert']/p",
    pauseTime: 5000,
    nameInput: "input[type=text]",
    pwdInput: "input[type=password]",
    loginBtn: "button[type=button]",
    homePageText: "p.admin-home-p2",

    backIcon: "//i[@class='iconfont icon-arrow-left cursor']",

    backBtn: "//button/span[text()='返回']",

    h_closeIcon: "//div[@class='header']//i[@class='el-dialog__close el-icon el-icon-close']",
    r_closeIcon: "//div[@class='right']//i[@class='el-dialog__close el-icon el-icon-close']",

    e_closeIcon: "//body/div[last()-1]//i[@class='el-message-box__close el-icon-close']",
    cancelBtn: "//body/div[last()-1]/div[1]/div[3]/button[1]/span",
    confirmBtn: "//body/div[last()-1]/div[1]/div[3]/button[2]/span"

};