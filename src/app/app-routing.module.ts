import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { FindFlightsComponent } from './find-flights/find-flights.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'bookingdetails',component:BookingdetailsComponent},
  {path:'findFlights',component:FindFlightsComponent},
  {path:'payment',component:PaymentComponent},
  {path:'ticket',component:TicketComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
