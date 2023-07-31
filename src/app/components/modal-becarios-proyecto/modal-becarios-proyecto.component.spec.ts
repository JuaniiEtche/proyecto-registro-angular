import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBecariosProyectoComponent } from './modal-becarios-proyecto.component';

describe('ModalBecariosProyectoComponent', () => {
  let component: ModalBecariosProyectoComponent;
  let fixture: ComponentFixture<ModalBecariosProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBecariosProyectoComponent],
    });
    fixture = TestBed.createComponent(ModalBecariosProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
