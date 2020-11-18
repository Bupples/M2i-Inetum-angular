import { TestBed } from '@angular/core/testing';

import { GraphicTemplateService } from './graphic-template.service';

describe('GraphicTemplateService', () => {
  let service: GraphicTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
