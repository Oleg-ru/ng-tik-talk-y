import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../../data/services/profile';
import { debounceTime, startWith, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-filters.html',
  styleUrl: './profile-filters.scss',
})
export class ProfileFilters {
  profileService = inject(ProfileService)
  fb = inject(FormBuilder);

  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: ['']
  });

  constructor() {
    this.searchForm.valueChanges
      .pipe(
        startWith({}),
        debounceTime(1000),
        switchMap(formValue => {
          return this.profileService.filterProfiles(formValue)
        }),
        takeUntilDestroyed()
      )
      .subscribe()
  }
}
