import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongService } from './services/song.service';

import { SharedPipes } from './pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedPipes,
    FormsModule
  ],
  providers: [
    SongService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
