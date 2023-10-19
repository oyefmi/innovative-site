import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  private emailUrl = 'http://localhost:3000/api/send-email';

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, phoneNumber: string, message: string) {
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message
    };
    return this.http.post(this.emailUrl, data);
  }
}
