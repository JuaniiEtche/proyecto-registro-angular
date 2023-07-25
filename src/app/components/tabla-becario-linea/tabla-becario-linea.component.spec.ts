import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBecarioLineaComponent } from './tabla-becario-linea.component';

describe('TablaBecarioLineaComponent', () => {
  let component: TablaBecarioLineaComponent;
  let fixture: ComponentFixture<TablaBecarioLineaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaBecarioLineaComponent]
    });
    fixture = TestBed.createComponent(TablaBecarioLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
