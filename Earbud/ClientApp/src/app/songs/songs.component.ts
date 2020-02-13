import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';
import { Observable } from 'rxjs';
import { Song } from '../models/song';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  songs$: Observable<Song[]>;
  searchText: string;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs() {
    this.songs$ = this.songService.getSongs();
  }

}
