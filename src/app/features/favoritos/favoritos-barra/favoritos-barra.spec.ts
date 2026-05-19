import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosBarra } from './favoritos-barra';

describe('FavoritosBarra', () => {
  let component: FavoritosBarra;
  let fixture: ComponentFixture<FavoritosBarra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritosBarra],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritosBarra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
