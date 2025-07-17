import { Component } from '@angular/core';
import { FormcontactComponent } from "./formcontact/formcontact.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormcontactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
