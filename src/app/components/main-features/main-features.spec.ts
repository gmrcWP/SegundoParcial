import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeatures } from './main-features';

describe('MainFeatures', () => {
  let component: MainFeatures;
  let fixture: ComponentFixture<MainFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
