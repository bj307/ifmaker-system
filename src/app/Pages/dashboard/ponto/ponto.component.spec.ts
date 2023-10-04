import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontoComponent } from './ponto.component';

describe('PontoComponent', () => {
  let component: PontoComponent;
  let fixture: ComponentFixture<PontoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PontoComponent]
    });
    fixture = TestBed.createComponent(PontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
