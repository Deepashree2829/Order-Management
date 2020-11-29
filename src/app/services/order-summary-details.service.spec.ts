/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderSummaryDetailsService } from './order-summary-details.service';

describe('Service: OrderSummaryDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderSummaryDetailsService]
    });
  });

  it('should ...', inject([OrderSummaryDetailsService], (service: OrderSummaryDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
