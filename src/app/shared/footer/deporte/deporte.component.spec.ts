import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeporteComponent } from './deporte.component';

describe('DeporteComponent', () => {
  let component: DeporteComponent;
  let fixture: ComponentFixture<DeporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeporteComponent]
    });
    fixture = TestBed.createComponent(DeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
