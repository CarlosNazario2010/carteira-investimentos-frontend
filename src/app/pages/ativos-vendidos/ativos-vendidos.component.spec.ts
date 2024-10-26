import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosVendidosComponent } from './ativos-vendidos.component';

describe('AtivosVendidosComponent', () => {
  let component: AtivosVendidosComponent;
  let fixture: ComponentFixture<AtivosVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtivosVendidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtivosVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
