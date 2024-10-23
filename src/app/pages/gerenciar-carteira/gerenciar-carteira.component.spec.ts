import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarCarteiraComponent } from './gerenciar-carteira.component';

describe('GerenciarCarteiraComponent', () => {
  let component: GerenciarCarteiraComponent;
  let fixture: ComponentFixture<GerenciarCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarCarteiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
