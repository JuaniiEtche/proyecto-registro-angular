import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBecarioComponent } from './detalles-becario.component';

describe('DetallesBecarioComponent', () => {
  let component: DetallesBecarioComponent;
  let fixture: ComponentFixture<DetallesBecarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesBecarioComponent]
    });
    fixture = TestBed.createComponent(DetallesBecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
