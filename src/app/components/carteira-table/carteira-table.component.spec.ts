import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraTableComponent } from './carteira-table.component';

describe('CarteiraTableComponent', () => {
  let component: CarteiraTableComponent;
  let fixture: ComponentFixture<CarteiraTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteiraTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteiraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
