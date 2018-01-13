import { NgServicePage } from './app.po';

describe('ng-service App', function() {
  let page: NgServicePage;

  beforeEach(() => {
    page = new NgServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
