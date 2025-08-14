import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AnimationDirectiveDirective } from '../../shared/directives/animation-directive.directive';
import { SettingsService } from '../../shared/services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends AnimationDirectiveDirective {
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private settingService: SettingsService
  ) {
    super(platformId);
  }
  override ngAfterViewInit(): void {
    this.settingService.loadSettings();
    super.ngAfterViewInit();
  }
}
