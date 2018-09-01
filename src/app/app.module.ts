import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartupComponent } from './startup/startup.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { YtPlayerComponent } from './yt-player/yt-player.component';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    ExerciseDetailsComponent,
    YtPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
