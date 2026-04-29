import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  private http = inject(HttpClient);

  getHolidaysZA(year = 2025, country = 'ZA') {
    const apiKey = environment.holidaysApiKey;

    return this.http.get(
      `https://holidayapi.com/v1/holidays?key=${apiKey}&country=${country}&year=${year}`,
    );
  }
}
