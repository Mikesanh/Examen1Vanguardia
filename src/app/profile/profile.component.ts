import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../Core/AlbumService';
import { Album } from '../Models/Album';
import { Song } from '../Models/Song';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,  private albumService: AlbumService ) { }
  
  boughtAlbums:Array<Album>;
  songs:Array<Song>

  ngOnInit(): void {
    this.boughtAlbums=this.albumService.getBoughtAlbums();



  }


}
