import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  loadSettings() {
    // Logic to load settings
    console.log('Settings loaded');
  }
  constructor() {}
}
