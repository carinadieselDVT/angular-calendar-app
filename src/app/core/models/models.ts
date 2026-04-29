export interface CalendarDay {
  date: Date;
  inCurrentMonth: boolean;
}

export interface CalendarMonth {
  date: Date; // Full date from date-fns
  year: number;
  month: number;
  weeks: CalendarDay[][];
}

export type CalendarYearGrid = CalendarMonth[][];

export interface Holiday {
  name: string;
  date: string;
  public?: boolean;
}

export interface HolidayApiResponse {
  status: number;
  holidays: Holiday[];
}
