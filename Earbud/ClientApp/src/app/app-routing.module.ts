import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs/songs.component';


const routes: Routes = [
  { path: '', component: SongsComponent, pathMatch: 'full' }, // No path defaults to Songs
  { path: '**', redirectTo: '/' } // no match defaults to Songs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
