import { TestBed } from '@angular/core/testing';

import { EditarPedidoService } from './editar-pedido.service';

describe('EditarPedidoService', () => {
  let service: EditarPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
