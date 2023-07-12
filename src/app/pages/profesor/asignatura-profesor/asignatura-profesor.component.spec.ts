import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaProfesorComponent } from './asignatura-profesor.component';

describe('AsignaturaProfesorComponent', () => {
  let component: AsignaturaProfesorComponent;
  let fixture: ComponentFixture<AsignaturaProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturaProfesorComponent]
    });
    fixture = TestBed.createComponent(AsignaturaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
