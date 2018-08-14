import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaConsultoresComponent } from './grafica-consultores.component';

describe('GraficaConsultoresComponent', () => {
  let component: GraficaConsultoresComponent;
  let fixture: ComponentFixture<GraficaConsultoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaConsultoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaConsultoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
