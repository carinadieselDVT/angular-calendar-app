import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarYearGrid, CalendarDay, CalendarMonth } from '../../../core/models/models';

@Component({
  selector: 'calendar-year-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './year-view.component.html',
})
export class YearViewComponent {
  // TODO: Can click on month,decide what to do on month click. Go to month view for clicked month maybe ?
  @Input() yearGrid: CalendarMonth[][] = [];

  @Output() monthClick = new EventEmitter<CalendarMonth>();
  @Output() dayClick = new EventEmitter<CalendarDay>();

  onMonthClick(month: CalendarMonth) {
    this.monthClick.emit(month);
  }

  onDayClick(day: CalendarDay) {
    this.dayClick.emit(day);
  }
}
