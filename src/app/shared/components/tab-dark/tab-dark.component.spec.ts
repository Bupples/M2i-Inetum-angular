import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDarkComponent } from './tab-dark.component';

describe('TabDarkComponent', () => {
  let component: TabDarkComponent;
  let fixture: ComponentFixture<TabDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
