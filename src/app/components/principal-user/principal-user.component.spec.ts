import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalUserComponent } from './principal-user.component';

describe('PrincipalUserComponent', () => {
  let component: PrincipalUserComponent;
  let fixture: ComponentFixture<PrincipalUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalUserComponent]
    });
    fixture = TestBed.createComponent(PrincipalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
