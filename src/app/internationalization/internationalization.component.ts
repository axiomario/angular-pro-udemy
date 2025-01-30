import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";
import { LanguageService } from './services/language.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  standalone: true,
  imports: [RouterOutlet, LanguageSelectorComponent],
  selector: 'internationalization',
  templateUrl: 'internationalization.component.html'
})

export default class InternationalizationComponent implements OnInit {
  constructor(
    private _languageService:LanguageService,
    private _cookieService: SsrCookieService
  ) {
    const language = this._cookieService.check('language') ? this._cookieService.get('language') : 'en';

    console.log(language);

    if (language) {
      this._languageService.changeLanguage(language);
    }
  }

  ngOnInit() { }
}
