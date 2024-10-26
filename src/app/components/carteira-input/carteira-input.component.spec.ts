import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraInputComponent } from './carteira-input.component';

describe('CarteiraInputComponent', () => {
  let component: CarteiraInputComponent;
  let fixture: ComponentFixture<CarteiraInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteiraInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteiraInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
