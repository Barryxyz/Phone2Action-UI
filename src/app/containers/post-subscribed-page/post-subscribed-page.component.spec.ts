import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSubscribedPageComponent } from './post-subscribed-page.component';

describe('PostSubscribedPageComponent', () => {
  let component: PostSubscribedPageComponent;
  let fixture: ComponentFixture<PostSubscribedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSubscribedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSubscribedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
