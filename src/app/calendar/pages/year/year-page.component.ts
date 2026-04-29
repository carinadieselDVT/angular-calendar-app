import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDay, CalendarMonth } from '../../../core/models/models';
import { CalendarService } from '../../../core/services/calendar.service';
import { YearViewComponent } from '../../components/year-view/year-view.component';
import { HolidayStore } from '../../store/holiday.store';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'year-page',
  standalone: true,
  imports: [CommonModule, YearViewComponent, ButtonModule],
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

  private changeYear(iterator: number) {
    const year = this.currentYear() + iterator;

    this.currentYear.set(year);
    this.holidayStore.setYear(year);
  }

  prevYear() {
    this.changeYear(-1);
  }

  nextYear() {
    this.changeYear(1);
  }

  ngOnInit() {
    this.holidayStore.loadBaseYear();

    this.holidayStore.setYear(this.currentYear());
  }
}
