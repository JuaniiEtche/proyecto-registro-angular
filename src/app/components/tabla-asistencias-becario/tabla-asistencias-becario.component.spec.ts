import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAsistenciasBecarioComponent } from './tabla-asistencias-becario.component';

describe('TablaAsistenciasBecarioComponent', () => {
  let component: TablaAsistenciasBecarioComponent;
  let fixture: ComponentFixture<TablaAsistenciasBecarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaAsistenciasBecarioComponent]
    });
    fixture = TestBed.createComponent(TablaAsistenciasBecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
