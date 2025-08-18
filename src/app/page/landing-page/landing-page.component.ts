import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { MainComponent } from "../main/main.component";
import { BookingComponent } from "../booking/booking.component";
import { CarCardsComponent } from '../car-cards/car-cards.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, MainComponent, BookingComponent, CarCardsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
