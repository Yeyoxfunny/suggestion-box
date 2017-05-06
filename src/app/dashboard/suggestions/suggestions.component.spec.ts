import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSuggestionsComponent } from './manage-suggestions.component';

describe('ManageSuggestionsComponent', () => {
  let component: ManageSuggestionsComponent;
  let fixture: ComponentFixture<ManageSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
