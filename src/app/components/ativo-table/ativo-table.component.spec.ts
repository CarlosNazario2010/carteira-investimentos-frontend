import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoTableComponent } from './ativo-table.component';

describe('AtivoTableComponent', () => {
  let component: AtivoTableComponent;
  let fixture: ComponentFixture<AtivoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtivoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtivoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
