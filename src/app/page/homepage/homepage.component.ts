import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { ImagesectionComponent } from "../imagesection/imagesection.component";
import { ContactComponent } from "../contact/contact.component";
import { PricerangeComponent } from "../pricerange/pricerange.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, ImagesectionComponent, ContactComponent, PricerangeComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
