import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactEmailService } from './contact-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

center: google.maps.LatLngLiteral = {lat: 39.425062598243564, lng: -76.81118242257342}
  
  
  constructor(private emailService: ContactEmailService) {  }

  onSubmit(contactForm: NgForm) {
    // if (contactForm.invalid) {
    //   return; 
    // }

    this.emailService.sendEmail(contactForm.value.name, contactForm.value.email, contactForm.value.phoneNumber, contactForm.value.message).subscribe(
      response => {
        console.log('Email sent successfully!', response);
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
    contactForm.reset();
  }
}
