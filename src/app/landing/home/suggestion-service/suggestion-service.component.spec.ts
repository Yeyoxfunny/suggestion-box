import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionServiceComponent } from './suggestion-service.component';

describe('SuggestionServiceComponent', () => {
  let component: SuggestionServiceComponent;
  let fixture: ComponentFixture<SuggestionServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
