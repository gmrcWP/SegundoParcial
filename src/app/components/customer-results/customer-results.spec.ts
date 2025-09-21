import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerResults } from './customer-results';

describe('CustomerResults', () => {
  let component: CustomerResults;
  let fixture: ComponentFixture<CustomerResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
