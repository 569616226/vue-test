const seleniumConfig = require('./build/selenium-conf')
const path = require('path')

module.exports = (function (settings) {
    settings.selenium.server_path = `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.version}-server.jar`

    settings.selenium.cli_args['webdriver.chrome.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.drivers.chrome.version}-${seleniumConfig.drivers.chrome.arch}-chromedriver`
    
    return settings;
})(require('./nightwatch.json'))