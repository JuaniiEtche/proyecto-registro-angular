import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecarioDatosAcademicosComponent } from './becario-datos-academicos.component';

describe('BecarioDatosAcademicosComponent', () => {
  let component: BecarioDatosAcademicosComponent;
  let fixture: ComponentFixture<BecarioDatosAcademicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecarioDatosAcademicosComponent]
    });
    fixture = TestBed.createComponent(BecarioDatosAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
