import { TestBed } from '@angular/core/testing';

import { PostFormClientService } from './post-form-client.service';

describe('PostFormClientService', () => {
  let service: PostFormClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFormClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
