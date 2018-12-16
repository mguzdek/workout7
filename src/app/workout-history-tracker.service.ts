import { Injectable } from '@angular/core';
import { CoreModule } from './core/core.module';
import { Exercise } from './Models/exercise';
@Injectable({
  providedIn: CoreModule
})
export class WorkoutHistoryTrackerService { 
  private maxHistoryItems = 20;   //Tracking last 20 exercises 
  private currentWorkoutLog: WorkoutLogEntry = null; 
  private workoutHistory: Array<WorkoutLogEntry> = []; 
  private  workoutTracked: boolean;
  private storageKey = 'workouts';

  constructor() { } 
   
  get tracking(): boolean { 
    return this.workoutTracked; 
  } 

  getHistory(): Array<WorkoutLogEntry> { 
    return this.workoutHistory; 
  }

  startTracking() { 
    this.workoutTracked = true; 
    this.currentWorkoutLog = new WorkoutLogEntry(new Date()); 
    if (this.workoutHistory.length >= this.maxHistoryItems) { 
      this.workoutHistory.shift(); 
    } 
      this.workoutHistory.push(this.currentWorkoutLog); 
  } 
   
  exerciseComplete(exercise: Exercise) { 
    this.currentWorkoutLog.lastExercise = exercise.title; 
    ++this.currentWorkoutLog.exercisesDone; 
  } 
   
  endTracking(completed: boolean) { 

    if(this.currentWorkoutLog == null){
      return;
    }

    this.currentWorkoutLog.completed = completed; 
    this.currentWorkoutLog.endedOn = new Date(); 
    //this.currentWorkoutLog = null; 
    this.workoutTracked = false; 
  }
}
 
export class WorkoutLogEntry { 
  constructor( 
    public startedOn: Date, 
    public completed: boolean = false, 
    public exercisesDone: number = 0, 
    public lastExercise?: string, 
    public endedOn?: Date
  ) { } 
}