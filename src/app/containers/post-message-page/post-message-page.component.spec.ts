import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMessagePageComponent } from './post-message-page.component';

describe('PostMessagePageComponent', () => {
  let component: PostMessagePageComponent;
  let fixture: ComponentFixture<PostMessagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMessagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
