import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor() {}

  sendMail(e: Event): Promise<EmailJSResponseStatus> {
    return emailjs.sendForm(
      'service_2c2ocaa',
      'template_4xd0baj',
      e.target as HTMLFormElement,
      '3nObEsSiVPa9lT7zO'
    );
  }
}
