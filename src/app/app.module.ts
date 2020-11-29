import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsPageComponent } from './order-details-page/order-details-page.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    OrderDetailsPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
