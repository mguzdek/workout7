import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { YtPlayerComponent } from './yt-player/yt-player.component';
import { SecondsToTimePipe } from './common/seconds-to-time.pipe';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { CoreModule } from './core/core.module';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    ExerciseDetailsComponent,
    YtPlayerComponent,
    SecondsToTimePipe,
    StartComponent,
    FinishComponent,
    WorkoutHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
