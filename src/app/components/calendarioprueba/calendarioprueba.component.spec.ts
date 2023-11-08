import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendariopruebaComponent } from './calendarioprueba.component';

describe('CalendariopruebaComponent', () => {
  let component: CalendariopruebaComponent;
  let fixture: ComponentFixture<CalendariopruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendariopruebaComponent]
    });
    fixture = TestBed.createComponent(CalendariopruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
