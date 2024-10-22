import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCarteiraComponent } from './criar-carteira.component';

describe('CriarCarteiraComponent', () => {
  let component: CriarCarteiraComponent;
  let fixture: ComponentFixture<CriarCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarCarteiraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
