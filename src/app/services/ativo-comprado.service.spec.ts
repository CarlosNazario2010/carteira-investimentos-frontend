import { TestBed } from '@angular/core/testing';

import { AtivoCompradoService } from './ativo-comprado.service';

describe('AtivoCompradoService', () => {
  let service: AtivoCompradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivoCompradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
