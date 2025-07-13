import { CommonModule } from '@angular/common';
import { Component, DOCUMENT, inject, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  templateUrl: './auth-button.html',
  styleUrl: './auth-button.scss',
  imports: [CommonModule],
})
export class AuthButtonComponent {
  document = inject(DOCUMENT);
  auth = inject(AuthService);
}
