import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoFomrComponent } from './empleado-fomr.component';

describe('EmpleadoFomrComponent', () => {
  let component: EmpleadoFomrComponent;
  let fixture: ComponentFixture<EmpleadoFomrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoFomrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoFomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
