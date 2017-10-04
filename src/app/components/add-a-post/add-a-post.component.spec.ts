import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAPostComponent } from './add-a-post.component';

describe('AddAPostComponent', () => {
  let component: AddAPostComponent;
  let fixture: ComponentFixture<AddAPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
