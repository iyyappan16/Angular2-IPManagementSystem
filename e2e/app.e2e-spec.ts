import { IPAddingSystemPage } from './app.po';

describe('ipadding-system App', function() {
  let page: IPAddingSystemPage;

  beforeEach(() => {
    page = new IPAddingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
