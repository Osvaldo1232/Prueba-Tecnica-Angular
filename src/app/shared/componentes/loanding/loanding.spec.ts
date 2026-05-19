import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loanding } from './loanding';

describe('Loanding', () => {
  let component: Loanding;
  let fixture: ComponentFixture<Loanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loanding],
    }).compileComponents();

    fixture = TestBed.createComponent(Loanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
