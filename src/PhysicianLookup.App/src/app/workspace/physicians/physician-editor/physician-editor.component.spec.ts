import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianEditorComponent } from './physician-editor.component';

describe('PhysicianEditorComponent', () => {
  let component: PhysicianEditorComponent;
  let fixture: ComponentFixture<PhysicianEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
