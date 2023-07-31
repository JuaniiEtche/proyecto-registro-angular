import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecarioProyectosAsignadosComponent } from './becario-proyectos-asignados.component';

describe('BecarioProyectosAsignadosComponent', () => {
  let component: BecarioProyectosAsignadosComponent;
  let fixture: ComponentFixture<BecarioProyectosAsignadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecarioProyectosAsignadosComponent],
    });
    fixture = TestBed.createComponent(BecarioProyectosAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
