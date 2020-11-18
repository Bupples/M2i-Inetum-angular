import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicTemplateComponent } from './graphic-template.component';

describe('GraphicTemplateComponent', () => {
  let component: GraphicTemplateComponent;
  let fixture: ComponentFixture<GraphicTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
