import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtDialogWarningComponent } from './txt-dialog-warning.component';

describe('TxtDialogWarningComponent', () => {
  let component: TxtDialogWarningComponent;
  let fixture: ComponentFixture<TxtDialogWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtDialogWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtDialogWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
