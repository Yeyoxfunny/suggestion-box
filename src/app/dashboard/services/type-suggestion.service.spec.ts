import { TestBed, inject } from '@angular/core/testing';

import { TypeSuggestionService } from './type-suggestion.service';

describe('TypeSuggestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeSuggestionService]
    });
  });

  it('should ...', inject([TypeSuggestionService], (service: TypeSuggestionService) => {
    expect(service).toBeTruthy();
  }));
});
