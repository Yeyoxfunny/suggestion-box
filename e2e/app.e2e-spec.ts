import { SuggestionBoxPage } from './app.po';

describe('suggestion-box App', () => {
  let page: SuggestionBoxPage;

  beforeEach(() => {
    page = new SuggestionBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
