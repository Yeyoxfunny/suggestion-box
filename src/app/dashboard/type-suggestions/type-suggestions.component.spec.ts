import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSuggestionsComponent } from './type-suggestions.component';

describe('TypeSuggestionsComponent', () => {
  let component: TypeSuggestionsComponent;
  let fixture: ComponentFixture<TypeSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
