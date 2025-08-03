import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-formcontact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formcontact.component.html',
  styleUrls: ['./formcontact.component.scss']
})
export class FormcontactComponent implements OnInit {
  kontaktForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.kontaktForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^(|0)[0-9 ]+$/)]],
      art: ['', Validators.required],
      start: ['', Validators.required],
      ziel: ['', Validators.required],
      datum: ['', Validators.required],
      uhrzeit: ['', Validators.required],
      nachricht: [''],
      customerCall: [false],
      largeCar: [false],
      lotsOfSuitcases: [false]
    });
  }

  onSubmit(): void {
    if (this.kontaktForm.valid) {
      const daten = this.kontaktForm.value;
      console.log('Formular abgesendet:', daten);

      const templateParams = {
        name: daten.name,
        email: daten.email,
        mobileNumber: daten.mobileNumber,
        art: daten.art,
        start: daten.start,
        ziel: daten.ziel,
        datum: daten.datum,
        uhrzeit: daten.uhrzeit,
        nachricht: daten.nachricht,
        customerCall: daten.customerCall ? 'Ja' : 'Nein',
        largeCar: daten.largeCar ? 'Ja' : 'Nein',
        lotsOfSuitcases: daten.lotsOfSuitcases ? 'Ja' : 'Nein'
      };

    console.log('Gesendete Daten:', templateParams); // <-- Kontrolle

      emailjs.send(
        'service_36pq0vn',   // z.B. 'service_xxx'
        'template_qco44kv',  // z.B. 'template_yyy'
        templateParams,
        'LQbp9u5pOO93Bqhhq'       // z.B. 'user_zzz'
      )
        .then((result: EmailJSResponseStatus) => {
          console.log('E-Mail gesendet!', result.text);
          this.showSuccessMessage();
          this.kontaktForm.reset();
        }, (error) => {
          console.error('Fehler beim Senden der E-Mail:', error.text);
          alert('Fehler beim Senden. Bitte versuche es später erneut.');
        });
    } else {
      alert('Bitte alle Pflichtfelder korrekt ausfüllen.');
    }
  }

  successMessageVisible = false;

  showSuccessMessage() {
    this.successMessageVisible = true;

    // Nach 5 Sekunden wieder ausblenden
    setTimeout(() => {
      this.successMessageVisible = false;
    }, 5000);
  }

}
