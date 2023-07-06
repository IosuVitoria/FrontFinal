import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCentroComponent } from './gestion-centro.component';

describe('GestionCentroComponent', () => {
  let component: GestionCentroComponent;
  let fixture: ComponentFixture<GestionCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCentroComponent]
    });
    fixture = TestBed.createComponent(GestionCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
