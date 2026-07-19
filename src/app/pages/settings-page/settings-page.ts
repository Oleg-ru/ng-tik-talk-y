import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  imports: [ReactiveFormsModule],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.scss',
})
export class SettingsPage {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl( '', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    stack: new FormControl(''),
  });
}
