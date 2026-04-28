import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDay } from '../../../core/models/models';

@Component({
  selector: 'calendar-month-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-view.component.html',
})
export class MonthViewComponent {
  @Input() month: CalendarDay[][] = [];
  @Output() dayClick = new EventEmitter<CalendarDay>();

  onDayClick(day: CalendarDay) {
    this.dayClick.emit(day);
  }
}
