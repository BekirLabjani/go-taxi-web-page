import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

}
