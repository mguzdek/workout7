import { ExerciseDetailsComponent } from './../exercise-details/exercise-details.component';
import { StartupComponent } from './startup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ExerciseDetailsComponent
  ],
  exports: [
    StartupComponent,
    ExerciseDetailsComponent
    
  ],
  declarations: [StartupComponent, ExerciseDetailsComponent]
})
export class StartupModule { }
