import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtPageComponent } from './txt-page.component';

describe('TxtPageComponent', () => {
  let component: TxtPageComponent;
  let fixture: ComponentFixture<TxtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
