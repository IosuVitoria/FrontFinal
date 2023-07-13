import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubCienciasComponent } from './club-ciencias.component';

describe('ClubCienciasComponent', () => {
  let component: ClubCienciasComponent;
  let fixture: ComponentFixture<ClubCienciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubCienciasComponent]
    });
    fixture = TestBed.createComponent(ClubCienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
