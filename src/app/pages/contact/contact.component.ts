import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactEmailService } from './contact-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

mapOptions: google.maps.MapOptions = {
  center: {lat: 39.42481, lng: -76.81129},
  zoom: 16.9
}

marker = {
  position: {lat: 39.42472, lng: -76.81131}
}

constructor(private emailService: ContactEmailService) {  }

  onSubmit(contactForm: NgForm) {

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
