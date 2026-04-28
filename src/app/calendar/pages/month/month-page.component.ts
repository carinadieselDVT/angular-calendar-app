import { Component, computed, inject, signal } from '@angular/core';
import { CalendarService } from '../../../core/services/calendar.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './month-page.component.html',
})
export class MonthPageComponent {
  calendarService = inject(CalendarService);
  currentData = signal(new Date());

  monthGrid = computed(() => {
    const date = this.currentData();

    return this.calendarService.generateMonth(date.getFullYear(), date.getMonth());
  });
}
