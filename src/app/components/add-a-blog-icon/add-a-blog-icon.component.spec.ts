import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddABlogIconComponent } from './add-a-blog-icon.component';

describe('AddABlogIconComponent', () => {
  let component: AddABlogIconComponent;
  let fixture: ComponentFixture<AddABlogIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddABlogIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddABlogIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
