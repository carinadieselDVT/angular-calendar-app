import { Injectable, computed, inject, signal } from '@angular/core';
import { addYears } from 'date-fns';
import { HolidayService } from '../../core/services/holiday.service';
import { Holiday } from '../../core/models/models';

@Injectable({ providedIn: 'root' })
export class HolidayStore {
  private api = inject(HolidayService);

  private baseYear = 2025;

  private baseHolidays = signal<Holiday[]>([]);

  private selectedYear = signal<number>(2025);

  loadBaseYear() {
    if (this.baseHolidays().length) return;

    this.api.getHolidaysZA(2025).subscribe((res) => {
      this.baseHolidays.set(
        res.holidays.map((h) => ({
          name: h.name,
          date: h.date,
          public: h.public,
        })),
      );
    });
  }

  setYear(year: number) {
    this.selectedYear.set(year);
  }

  readonly holidays = computed(() => {
    const year = this.selectedYear();
    const base = this.baseHolidays();

    if (!base.length) return [];

    const diff = year - this.baseYear;

    return base.map((h) => ({
      name: h.name,
      public: h.public,
      date: addYears(new Date(h.date), diff).toISOString().split('T')[0],
    }));
  });

  readonly holidayMap = computed(() => {
    const map = new Map<string, Holiday>();

    this.holidays().forEach((h) => {
      map.set(h.date, h);
    });

    return map;
  });
}
