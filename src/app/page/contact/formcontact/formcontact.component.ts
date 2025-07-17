import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcontact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formcontact.component.html',
  styleUrl: './formcontact.component.scss'
})
export class FormcontactComponent implements OnInit {
  kontaktForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.kontaktForm = this.fb.group({
      name: ['', Validators.required],
      telefon: ['', [Validators.required, Validators.pattern(/^(|0)[0-9 ]+$/)]],
      art: ['', Validators.required],
      start: ['', Validators.required],
      ziel: ['', Validators.required],
      datum: ['', Validators.required],
      uhrzeit: ['', Validators.required],
      nachricht: ['']
    });
  }

  onSubmit(): void {
    if (this.kontaktForm.valid) {
      const daten = this.kontaktForm.value;
      console.log('Formular abgesendet:', daten);
      // Hier EmailJS oder Formspree verwenden
    }
  }
}
