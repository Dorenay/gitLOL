import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBodyComponent } from './global-body.component';

describe('GlobalBodyComponent', () => {
  let component: GlobalBodyComponent;
  let fixture: ComponentFixture<GlobalBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
