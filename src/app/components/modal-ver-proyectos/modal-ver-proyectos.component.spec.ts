import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerProyectosComponent } from './modal-ver-proyectos.component';

describe('ModalVerProyectosComponent', () => {
  let component: ModalVerProyectosComponent;
  let fixture: ComponentFixture<ModalVerProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalVerProyectosComponent],
    });
    fixture = TestBed.createComponent(ModalVerProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
