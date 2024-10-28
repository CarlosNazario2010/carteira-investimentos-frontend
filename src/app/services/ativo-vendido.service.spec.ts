import { TestBed } from '@angular/core/testing';

import { AtivoVendidoService } from './ativo-vendido.service';

describe('AtivoVendidoService', () => {
  let service: AtivoVendidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivoVendidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
