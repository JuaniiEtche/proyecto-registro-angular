import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarBecarioComponent } from './modal-eliminar-becario.component';

describe('ModalEliminarBecarioComponent', () => {
  let component: ModalEliminarBecarioComponent;
  let fixture: ComponentFixture<ModalEliminarBecarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEliminarBecarioComponent]
    });
    fixture = TestBed.createComponent(ModalEliminarBecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
