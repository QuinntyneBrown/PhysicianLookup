import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportBrowserVersionComponent } from './unsupport-browser-version.component';

describe('UnsupportBrowserVersionComponent', () => {
  let component: UnsupportBrowserVersionComponent;
  let fixture: ComponentFixture<UnsupportBrowserVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsupportBrowserVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsupportBrowserVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
