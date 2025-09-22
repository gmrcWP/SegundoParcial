import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCards } from './customer-cards';

describe('CustomerCards', () => {
  let component: CustomerCards;
  let fixture: ComponentFixture<CustomerCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
