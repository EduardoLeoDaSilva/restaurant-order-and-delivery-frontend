import { TestBed } from '@angular/core/testing';

import { ServicosAppService } from './servicos-app.service';

describe('ServicosAppService', () => {
  let service: ServicosAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
