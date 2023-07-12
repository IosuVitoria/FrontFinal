import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionVisionValoresComponent } from './mision-vision-valores.component';

describe('MisionVisionValoresComponent', () => {
  let component: MisionVisionValoresComponent;
  let fixture: ComponentFixture<MisionVisionValoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisionVisionValoresComponent]
    });
    fixture = TestBed.createComponent(MisionVisionValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
