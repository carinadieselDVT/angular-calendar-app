import { Injectable } from '@angular/core';
import { CalendarDay } from '../models/models';
import { startOfMonth, startOfWeek, addDays, isSameMonth } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class Calendar {
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
        // basically day++
        dateIterator = addDays(dateIterator, 1);
      }
      // Push week
      weeks.push(weekRow);
    }

    return weeks;
  }
}

// Flow

// /month -> What month by default ? - maybe currentDate = new Date()
// MonthPage gets data from calendar service - something like generateMotnh(year,month)
// MonthPage stores results but doesn't modify it
// MonthPage passes data to calendar view

// MonthView:
// Loops weeks + days
// Displays date number
// Current month

// Use 42 cells for calendar so it doesn't overflow ever
