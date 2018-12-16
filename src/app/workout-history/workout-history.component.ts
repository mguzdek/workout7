import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { WorkoutHistoryTrackerService, WorkoutLogEntry } from '../workout-history-tracker.service';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html'
})
export class WorkoutHistoryComponent implements OnInit {
  history: Array<WorkoutLogEntry> = [];
  completed: boolean;
  constructor(private tracker: WorkoutHistoryTrackerService, private location: Location) { }

  ngOnInit() {
    this.history = this.tracker.getHistory();
  }

  goBack() {
    this.location.back();
  }

}