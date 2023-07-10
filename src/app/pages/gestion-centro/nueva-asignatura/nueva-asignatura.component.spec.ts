import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAsignaturaComponent } from './nueva-asignatura.component';

describe('NuevaAsignaturaComponent', () => {
  let component: NuevaAsignaturaComponent;
  let fixture: ComponentFixture<NuevaAsignaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaAsignaturaComponent]
    });
    fixture = TestBed.createComponent(NuevaAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

 