import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderSummaryDetailsService } from '../services/order-summary-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: any = [];
  constructor(private router: Router, private orderSummary: OrderSummaryDetailsService) { }

  ngOnInit(): void {
    this.getOrderSummary();
  }
 
  getOrderSummary() {
    this.orderSummary.getOrderSummary().subscribe((res: any[]) => {
      this.orderDetails = res;
      console.log(this.orderDetails);
    });
  }
}
