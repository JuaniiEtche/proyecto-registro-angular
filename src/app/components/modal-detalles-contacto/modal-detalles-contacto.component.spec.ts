import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallesContactoComponent } from './modal-detalles-contacto.component';

describe('ModalDetallesContactoComponent', () => {
  let component: ModalDetallesContactoComponent;
  let fixture: ComponentFixture<ModalDetallesContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDetallesContactoComponent]
    });
    fixture = TestBed.createComponent(ModalDetallesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
