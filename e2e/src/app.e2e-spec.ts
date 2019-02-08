import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home component on default route', () => {
    page.navigateTo('/').then(() => {
      expect(page.isComponentPresent('home')).toBeTruthy();
      expect(page.isComponentPresent('skills')).toBeFalsy();
    });
  });

  it('should display skills component on skills route', () => {
    page.navigateTo('/skills').then(() => {
      expect(page.isComponentPresent('skills')).toBeTruthy();
    });
  });

  it('should display project component on project route', () => {
    page.navigateTo('/projects').then(() => {
      expect(page.isComponentPresent('project')).toBeTruthy();
    });
  });

  it('should display work component on work route', () => {
    page.navigateTo('/work').then(() => {
      expect(page.isComponentPresent('work')).toBeTruthy();
    });
  });

  it('should display education component on education route', () => {
    page.navigateTo('/education').then(() => {
      expect(page.isComponentPresent('education')).toBeTruthy();
    });
  });

  it('should display contact component on contact route', () => {
    page.navigateTo('/contact').then(() => {
      expect(page.isComponentPresent('contact')).toBeTruthy();
    });
  });

  it('should display page-not-found component on incorrect route', () => {
    page.navigateTo('/404').then(() => {
      expect(page.isComponentPresent('page-not-found')).toBeTruthy();
    });
  });
});
