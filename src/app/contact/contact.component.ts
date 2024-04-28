import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MailService } from '../mail.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public emailAddress: string = 'info@niklasnordgren.com';

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public textFieldFormControl = new FormControl('', [Validators.required]);

  public contactFormGroup = new FormGroup({
    email: this.emailFormControl,
    message: this.textFieldFormControl,
  });

  constructor(
    private mailService: MailService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  sendMail(e: Event, formDirective: FormGroupDirective): void {
    this.mailService.sendMail(e).then(
      () => {
        this.openSuccessSnackBar();
      },
      () => {
        this.openFailureSnackBar();
      }
    );

    formDirective.resetForm();
    this.contactFormGroup.reset();
  }

  resetForm(formDirective: FormGroupDirective): void {
    formDirective.resetForm();
    this.contactFormGroup.reset();
  }

  openSuccessSnackBar(): void {
    this.snackBar.open('Email was sent successfully.', 'Close', {
      duration: 5000,
    });
  }

  openFailureSnackBar(): void {
    this.snackBar.open(
      'An error occurred, please email info@niklasnordgren.com if the problem persists.',
      'Close',
      {
        duration: 5000,
      }
    );
  }
}
