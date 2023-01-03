import { res } from './mockData';

export type Course = {
  alternatename: string;
  canViewTimetable: boolean;
  displayname: string;
  id: number;
  longName: string;
  name: string;
  roomCapacity: number;
  type: number;
};

export type Period = {
  cellState: string;
  code: number;
  date: number;
  elements: Course[];
  endTime: number;
  hasPeriodText: boolean;
  id: number;
  is: {
    event: boolean;
    standard: boolean;
  };
  lessonCode: string;
  lessonId: number;
  lessonNumber: number;
  lessonText: string;
  periodAttachments?: [];
  periodInfo: string;
  periodText: string;
  priority: number;
  roomCapacity: number;
  startTime: number;
  studentCount: number;
  substText: string;
};

export type Response = typeof res;
