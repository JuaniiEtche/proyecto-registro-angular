import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaBecarioComponent } from './asistencia-becario.component';

describe('AsistenciaBecarioComponent', () => {
  let component: AsistenciaBecarioComponent;
  let fixture: ComponentFixture<AsistenciaBecarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciaBecarioComponent]
    });
    fixture = TestBed.createComponent(AsistenciaBecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
