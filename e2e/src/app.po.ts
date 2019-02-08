import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string) {
    return browser.get(path);
  }

  isComponentPresent(path: string) {
    const elem = element(by.tagName('app-' + path)).isPresent();
    return elem;
  }
}
