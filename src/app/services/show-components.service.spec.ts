import { TestBed } from '@angular/core/testing';

import { ShowComponentsService } from './show-components.service';

describe('ShowComponentsService', () => {
  let service: ShowComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
