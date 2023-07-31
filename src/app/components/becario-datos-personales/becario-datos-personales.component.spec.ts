import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecarioDatosPersonalesComponent } from './becario-datos-personales.component';

describe('BecarioDatosPersonalesComponent', () => {
  let component: BecarioDatosPersonalesComponent;
  let fixture: ComponentFixture<BecarioDatosPersonalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecarioDatosPersonalesComponent],
    });
    fixture = TestBed.createComponent(BecarioDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
