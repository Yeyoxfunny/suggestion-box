import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSuggestionModalComponent } from './type-suggestion-modal.component';

describe('TypeSuggestionModalComponent', () => {
  let component: TypeSuggestionModalComponent;
  let fixture: ComponentFixture<TypeSuggestionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSuggestionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSuggestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
