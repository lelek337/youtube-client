import { TestBed } from '@angular/core/testing';

import { CardReduxService } from './card-redux.service';

describe('CardReduxService', () => {
  let service: CardReduxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardReduxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
