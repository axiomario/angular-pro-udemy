import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({providedIn: 'root'})
export class LanguageService {
  public currentLanguage = signal('');
  constructor(
    private _cookieService: SsrCookieService,
    private _translateService: TranslateService
  ) { }

  public changeLanguage(language: string): void {
    this._cookieService.set('language', language);
    this.currentLanguage.set(language);
    this._translateService.setDefaultLang(language);
    this._translateService.use(language);
  }
}
