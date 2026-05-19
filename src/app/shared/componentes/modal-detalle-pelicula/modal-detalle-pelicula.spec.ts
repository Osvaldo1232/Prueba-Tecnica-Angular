import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallePelicula } from './modal-detalle-pelicula';

describe('ModalDetallePelicula', () => {
  let component: ModalDetallePelicula;
  let fixture: ComponentFixture<ModalDetallePelicula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetallePelicula],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDetallePelicula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
