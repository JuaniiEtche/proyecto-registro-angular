import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBecariosComponent } from './listado-becarios.component';

describe('ListadoBecariosComponent', () => {
  let component: ListadoBecariosComponent;
  let fixture: ComponentFixture<ListadoBecariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoBecariosComponent],
    });
    fixture = TestBed.createComponent(ListadoBecariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
