import { LanguageService } from '@/internationalization/services/language.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [TranslateModule],
  selector: 'language-selector',
  templateUrl: 'language-selector.component.html'
})

export class LanguageSelectorComponent implements OnInit {
  private _languageService = inject(LanguageService);
  public languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);
  public currentLanguage =this._languageService.currentLanguage;

  constructor() { }

  ngOnInit() { }

  onChangeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const language = target.value;

    this._languageService.changeLanguage(language);
  }
}
