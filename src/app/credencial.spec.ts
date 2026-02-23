import { TestBed } from '@angular/core/testing';

import { Credencial } from './credencial';

describe('Credencial', () => {
  let service: Credencial;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Credencial);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
