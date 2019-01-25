import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularNowComponent } from './popular-now.component';

describe('PopularNowComponent', () => {
  let component: PopularNowComponent;
  let fixture: ComponentFixture<PopularNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
