import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCompra } from './formulario-compra';

describe('FormularioCompra', () => {
  let component: FormularioCompra;
  let fixture: ComponentFixture<FormularioCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCompra],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCompra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
