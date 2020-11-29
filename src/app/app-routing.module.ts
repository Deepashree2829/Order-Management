import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderDetailsPageComponent } from './order-details-page/order-details-page.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', redirectTo: '', pathMatch: 'full'},
  { path: 'orderSummary', component: OrderDetailsComponent},
  { path: 'orderDetails/:orderId', component: OrderDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
