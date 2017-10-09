import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddABlogComponent } from './add-a-blog.component';

describe('AddABlogComponent', () => {
  let component: AddABlogComponent;
  let fixture: ComponentFixture<AddABlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddABlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddABlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
