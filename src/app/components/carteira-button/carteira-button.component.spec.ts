import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraButtonComponent } from './carteira-button.component';

describe('CarteiraComponent', () => {
  let component: CarteiraButtonComponent;
  let fixture: ComponentFixture<CarteiraButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteiraButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteiraButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
