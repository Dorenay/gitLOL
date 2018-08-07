import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartButtonComponent } from './standart-button.component';

describe('StandartButtonComponent', () => {
  let component: StandartButtonComponent;
  let fixture: ComponentFixture<StandartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
