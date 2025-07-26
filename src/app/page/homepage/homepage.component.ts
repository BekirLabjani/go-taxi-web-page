import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { ImagesectionComponent } from "../imagesection/imagesection.component";
import { ContactComponent } from "../contact/contact.component";
import { PricerangeComponent } from "../pricerange/pricerange.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, ImagesectionComponent, ContactComponent, PricerangeComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
