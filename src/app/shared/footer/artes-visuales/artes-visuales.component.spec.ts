import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesVisualesComponent } from './artes-visuales.component';

describe('ArtesVisualesComponent', () => {
  let component: ArtesVisualesComponent;
  let fixture: ComponentFixture<ArtesVisualesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtesVisualesComponent]
    });
    fixture = TestBed.createComponent(ArtesVisualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
