import { TestBed } from '@angular/core/testing';

import { PostPedidosService } from './post-pedidos.service';

describe('PostPedidosService', () => {
  let service: PostPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
