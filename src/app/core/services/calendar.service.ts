import { Injectable } from '@angular/core';
import { CalendarDay, CalendarMonth, CalendarYearGrid } from '../models/models';
import { startOfMonth, startOfWeek, addDays, isSameMonth, addMonths, startOfYear } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  generateMonth(year: number, month: number): CalendarDay[][] {
    const weeks: CalendarDay[][] = [];

    const firstDayOfMonth = startOfMonth(new Date(year, month));

    let dateIterator = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 });
    // Outer loop = weeks - 6 rows
    for (let week = 0; week < 6; week++) {
      const weekRow: CalendarDay[] = [];
      // Inner loop = days - 7 columns
      for (let day = 0; day < 7; day++) {
        weekRow.push({
          date: new Date(dateIterator),
          inCurrentMonth: isSameMonth(dateIterator, firstDayOfMonth), // NB USE FOR STYLING !!!
        });
        dateIterator = addDays(dateIterator, 1);
      }
      // Push week
      weeks.push(weekRow);
    }

    return weeks;
  }

  generateYearGrid(year: number): CalendarMonth[][] {
    const yearStart = startOfYear(new Date(year, 0));
    const months: CalendarMonth[] = [];

    // Generate months
    for (let i = 0; i < 12; i++) {
      const date = addMonths(yearStart, i);

      months.push({
        date,
        year: date.getFullYear(),
        month: date.getMonth(),
        weeks: this.generateMonth(date.getFullYear(), date.getMonth()),
      });
    }

    // Split months into grid for ui
    const yearGrid: CalendarMonth[][] = [];
    for (let i = 0; i < 12; i += 4) {
      yearGrid.push(months.slice(i, i + 4));
    }

    return yearGrid;
  }
}
