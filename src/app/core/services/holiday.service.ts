import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HolidayApiResponse } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  private http = inject(HttpClient);

  getHolidaysZA(year: Number = 2025, country: string = 'ZA') {
    const apiKey = environment.holidaysApiKey;

    return this.http.get<HolidayApiResponse>(
      `https://holidayapi.com/v1/holidays?key=${apiKey}&country=${country}&year=${year}`,
    );
  }
}
