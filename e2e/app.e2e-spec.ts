import { LMSv2Page } from './app.po';

describe('lmsv2 App', function() {
  let page: LMSv2Page;

  beforeEach(() => {
    page = new LMSv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
