import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeaComponent } from './new-idea.component';

describe('NewIdeaComponent', () => {
  let component: NewIdeaComponent;
  let fixture: ComponentFixture<NewIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewIdeaComponent]
    });
    fixture = TestBed.createComponent(NewIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
