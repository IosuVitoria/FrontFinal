import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoComponent } from './aviso.component';

describe('AvisoComponent', () => {
  let component: AvisoComponent;
  let fixture: ComponentFixture<AvisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoComponent]
    });
    fixture = TestBed.createComponent(AvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
