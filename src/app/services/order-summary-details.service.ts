import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryDetailsService {

constructor(private http: HttpClient) { }

  getOrderSummary() {
    return this.http.get('../../assets/order-summary.json');
  }

  getOrderDetails(id: any,callback) {
    this.http.get('../../assets/order-summary.json').subscribe((res: any) => {
      res.find((order) => {
        if(order.orderNo === id) {
          callback(order);
        }
    });
  });
  }
}
