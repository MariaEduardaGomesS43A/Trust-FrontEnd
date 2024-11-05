import { TestBed } from '@angular/core/testing';

import { PostPedidos2Service } from './post-pedidos2.service';

describe('PostPedidos2Service', () => {
  let service: PostPedidos2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPedidos2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
