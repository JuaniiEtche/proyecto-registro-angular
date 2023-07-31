import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsistenciasBecarioComponent } from './modal-asistencias-becario.component';

describe('ModalAsistenciasBecarioComponent', () => {
  let component: ModalAsistenciasBecarioComponent;
  let fixture: ComponentFixture<ModalAsistenciasBecarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAsistenciasBecarioComponent],
    });
    fixture = TestBed.createComponent(ModalAsistenciasBecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
