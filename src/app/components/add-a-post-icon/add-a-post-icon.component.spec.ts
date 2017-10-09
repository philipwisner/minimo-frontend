import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAPostIconComponent } from './add-a-post-icon.component';

describe('AddAPostIconComponent', () => {
  let component: AddAPostIconComponent;
  let fixture: ComponentFixture<AddAPostIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAPostIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAPostIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
