import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtBandeauComponent } from './txt-bandeau.component';

describe('TxtBandeauComponent', () => {
  let component: TxtBandeauComponent;
  let fixture: ComponentFixture<TxtBandeauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtBandeauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtBandeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
