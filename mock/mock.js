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
    super_admin_password: 'admin123456'
};