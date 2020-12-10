import { TestBed } from '@angular/core/testing';

import { LoginpanitiaService } from './loginpanitia.service';

describe('LoginpanitiaService', () => {
  let service: LoginpanitiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginpanitiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
