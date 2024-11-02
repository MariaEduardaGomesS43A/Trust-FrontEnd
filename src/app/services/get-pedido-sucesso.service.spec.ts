import { TestBed } from '@angular/core/testing';

import { GetPedidoSucessoService } from './get-pedido-sucesso.service';

describe('GetPedidoSucessoService', () => {
  let service: GetPedidoSucessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPedidoSucessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
