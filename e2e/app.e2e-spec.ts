import { UserDashboardPage } from './app.po';

describe('user-dashboard App', function() {
  let page: UserDashboardPage;

  beforeEach(() => {
    page = new UserDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
