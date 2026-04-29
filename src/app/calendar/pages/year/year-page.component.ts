import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDay, CalendarMonth } from '../../../core/models/models';
import { CalendarService } from '../../../core/services/calendar.service';
import { YearViewComponent } from '../../components/year-view/year-view.component';
import { HolidayStore } from '../../store/holiday.store';

@Component({
  selector: 'year-page',
  standalone: true,
  imports: [CommonModule, YearViewComponent],
  templateUrl: './year-page.component.html',
})
export class YearPageComponent implements OnInit {
  private calendarService = inject(CalendarService);
  private holidayStore = inject(HolidayStore);
  currentYear = signal(new Date().getFullYear());
  yearGrid = computed<CalendarMonth[][]>(() =>
    this.calendarService.generateYearGrid(this.currentYear()),
  );
  holidayMap = this.holidayStore.holidayMap;

  onDayClick(day: CalendarDay) {
    console.log('Day clicked:', day);
  }

  onMonthClick(month: CalendarMonth) {
    console.log('Month clicked:', month);
  }

  ngOnInit() {
    this.holidayStore.loadBaseYear();

    this.holidayStore.setYear(this.currentYear());
  }
}
