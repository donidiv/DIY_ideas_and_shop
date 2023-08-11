import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocomeNoUserComponent } from './welocome-no-user.component';

describe('WelocomeNoUserComponent', () => {
  let component: WelocomeNoUserComponent;
  let fixture: ComponentFixture<WelocomeNoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelocomeNoUserComponent]
    });
    fixture = TestBed.createComponent(WelocomeNoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
