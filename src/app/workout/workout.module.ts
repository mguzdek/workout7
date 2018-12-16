import { ExerciseDetailsComponent } from './../exercise-details/exercise-details.component';
import { WorkoutComponent } from './workout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ExerciseDetailsComponent
  ],
  exports: [
    WorkoutComponent,
    ExerciseDetailsComponent
    
  ],
  declarations: [WorkoutComponent, ExerciseDetailsComponent]
})
export class WorkoutModule { }
