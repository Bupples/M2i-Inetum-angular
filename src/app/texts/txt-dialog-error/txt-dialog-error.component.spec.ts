import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtDialogErrorComponent } from './txt-dialog-error.component';

describe('TxtDialogErrorComponent', () => {
  let component: TxtDialogErrorComponent;
  let fixture: ComponentFixture<TxtDialogErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtDialogErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtDialogErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
