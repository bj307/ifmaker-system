import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarTokenComponent } from './gerar-token.component';

describe('GerarTokenComponent', () => {
  let component: GerarTokenComponent;
  let fixture: ComponentFixture<GerarTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarTokenComponent]
    });
    fixture = TestBed.createComponent(GerarTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
