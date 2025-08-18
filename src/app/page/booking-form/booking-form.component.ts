import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { CommonModule, NgFor,  } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [NavbarComponent , CommonModule, FormsModule ],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']   
})
export class BookingFormComponent implements OnInit { // OnInit implementieren


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onSubmit(form: NgForm) {
  }
}
