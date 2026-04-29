import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarYearGrid, CalendarDay, CalendarMonth } from '../../../core/models/models';
import { CalendarService } from '../../../core/services/calendar.service';
import { YearViewComponent } from '../../components/year-view/year-view.component';

@Component({
  selector: 'year-page',
  standalone: true,
  imports: [CommonModule, YearViewComponent],
  templateUrl: './year-page.component.html',
})
export class YearPageComponent {
  private calendarService = inject(CalendarService);
  currentYear = signal(new Date().getFullYear());
  yearGrid = computed<CalendarMonth[][]>(() =>
    this.calendarService.generateYearGrid(this.currentYear()),
  );

  onDayClick(day: CalendarDay) {
    console.log('Day clicked:', day);
  }

  onMonthClick(month: CalendarMonth) {
    console.log('Month clicked:', month);
  }
}
