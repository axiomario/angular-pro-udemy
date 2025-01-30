import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental'
import { provideMarkdown } from 'ngx-markdown';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(),
    provideHttpClient(withFetch()),
    provideTanStackQuery(new QueryClient(), withDevtools()),
    provideMarkdown(),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })),
    SsrCookieService
  ]
};
