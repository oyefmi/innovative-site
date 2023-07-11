import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.builder.group({
    name: '',
    email: '',
    phoneNumber: '',
    description: ''
  })

  constructor(private builder: FormBuilder) { }

  ngOnInit() { }

  onSubmit(): void {
    console.warn('Your information has been submitted', this.contactForm.value);
    this.contactForm.reset();
  }
}
