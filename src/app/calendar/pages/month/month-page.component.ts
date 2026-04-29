import { Component, computed, inject, signal } from '@angular/core';
import { CalendarService } from '../../../core/services/calendar.service';
import { DatePipe } from '@angular/common';
import { MonthViewComponent } from '../../components/month-view/month-view.component';

@Component({
  selector: 'month-page',
  standalone: true,
  imports: [DatePipe, MonthViewComponent],
  templateUrl: './month-page.component.html',
})
export class MonthPageComponent {
  calendarService = inject(CalendarService);
  currentDate = signal(new Date());

  monthGrid = computed(() => {
    const date = this.currentDate();

    return this.calendarService.generateMonth(date.getFullYear(), date.getMonth());
  });

  // Optional TODOs : Add functionality for next or previous month
}
