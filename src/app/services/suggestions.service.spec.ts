import { TestBed, inject } from '@angular/core/testing';

import { SuggestionsService } from './suggestions.service';

describe('SuggestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestionsService]
    });
  });

  it('should ...', inject([SuggestionsService], (service: SuggestionsService) => {
    expect(service).toBeTruthy();
  }));
});
