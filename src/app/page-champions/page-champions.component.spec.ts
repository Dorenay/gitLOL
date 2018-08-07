import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChampionsComponent } from './page-champions.component';

describe('PageChampionsComponent', () => {
  let component: PageChampionsComponent;
  let fixture: ComponentFixture<PageChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
