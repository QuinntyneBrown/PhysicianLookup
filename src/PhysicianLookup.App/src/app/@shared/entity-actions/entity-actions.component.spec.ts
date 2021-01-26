import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityActionsComponent } from './entity-actions.component';

describe('EntityActionsComponent', () => {
  let component: EntityActionsComponent;
  let fixture: ComponentFixture<EntityActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
