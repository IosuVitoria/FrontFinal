import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCulturalesComponent } from './actividades-culturales.component';

describe('ActividadesCulturalesComponent', () => {
  let component: ActividadesCulturalesComponent;
  let fixture: ComponentFixture<ActividadesCulturalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadesCulturalesComponent]
    });
    fixture = TestBed.createComponent(ActividadesCulturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
