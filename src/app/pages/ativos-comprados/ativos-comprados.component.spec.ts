import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosCompradosComponent } from './ativos-comprados.component';

describe('AtivosCompradosComponent', () => {
  let component: AtivosCompradosComponent;
  let fixture: ComponentFixture<AtivosCompradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtivosCompradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtivosCompradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
