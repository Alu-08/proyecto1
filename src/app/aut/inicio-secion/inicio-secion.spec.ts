import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSecion } from './inicio-secion';

describe('InicioSecion', () => {
  let component: InicioSecion;
  let fixture: ComponentFixture<InicioSecion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioSecion],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioSecion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
