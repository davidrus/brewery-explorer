import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.scss',
})
export class SearchFormComponent {
  doSearch = output<string>();

  cityControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
    Validators.pattern(/^[a-zA-Z0-9\s]*$/),
  ]);

  processSearch(event: Event) {
    console.log(event);
    event.preventDefault();

    if (this.cityControl.valid && this.cityControl.value) {
      this.doSearch.emit(this.cityControl.value);
    }
  }
}
