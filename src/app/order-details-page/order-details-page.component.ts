import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderSummaryDetailsService } from '../services/order-summary-details.service';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.css']
})
export class OrderDetailsPageComponent implements OnInit {

  orderDetails: any;
  constructor(private activateRoute: ActivatedRoute, private ordeSummaryService: OrderSummaryDetailsService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {

      console.log(param.orderId);
      this.ordeSummaryService.getOrderDetails(param.orderId, (data) => { this.orderDetails = data });
      console.log(this.orderDetails);
    });
  }

}
