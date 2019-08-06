import { TestBed } from '@angular/core/testing';

import { NgxMenuService } from './ngx-menu.service';

describe('NgxMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMenuService = TestBed.get(NgxMenuService);
    expect(service).toBeTruthy();
  });
});
