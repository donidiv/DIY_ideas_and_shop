import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIdeaComponent } from './update-idea.component';

describe('UpdateIdeaComponent', () => {
  let component: UpdateIdeaComponent;
  let fixture: ComponentFixture<UpdateIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateIdeaComponent]
    });
    fixture = TestBed.createComponent(UpdateIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
