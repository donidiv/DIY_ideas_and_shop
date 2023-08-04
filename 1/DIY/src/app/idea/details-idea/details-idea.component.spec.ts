import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIdeaComponent } from './details-idea.component';

describe('DetailsIdeaComponent', () => {
  let component: DetailsIdeaComponent;
  let fixture: ComponentFixture<DetailsIdeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsIdeaComponent]
    });
    fixture = TestBed.createComponent(DetailsIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
