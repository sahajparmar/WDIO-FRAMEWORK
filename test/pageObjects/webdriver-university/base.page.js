export default class BasePage {
    open (path) {
        return browser.url(`${path}`); //http://www.webdriveruniversity.com/${path}`);
    }
}