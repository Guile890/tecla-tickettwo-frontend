import { TestBed } from '@angular/core/testing';

import { GuardmainGuard } from './guardmain.guard';

describe('GuardmainGuard', () => {
  let guard: GuardmainGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardmainGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
