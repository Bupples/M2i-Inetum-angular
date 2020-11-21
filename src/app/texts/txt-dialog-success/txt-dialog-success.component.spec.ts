import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtDialogSuccessComponent } from './txt-dialog-success.component';

describe('TxtDialogSuccessComponent', () => {
  let component: TxtDialogSuccessComponent;
  let fixture: ComponentFixture<TxtDialogSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtDialogSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtDialogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
