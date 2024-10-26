import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoComponent } from './saldo.component';

describe('SaldoComponent', () => {
  let component: SaldoComponent;
  let fixture: ComponentFixture<SaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaldoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
