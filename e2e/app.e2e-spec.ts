import { NgScrumPokerPage } from './app.po';

describe('ng-scrum-poker App', () => {
  let page: NgScrumPokerPage;

  beforeEach(() => {
    page = new NgScrumPokerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
