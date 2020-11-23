import { Component, OnInit } from '@angular/core';
import { Album } from '../Models/Album';
import { albums } from '../Mocks/albums';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../Core/AlbumService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private Router:ActivatedRoute, private albumService: AlbumService) {
    

   }
  defaultElevation = 2;
  raisedElevation = 8;
  albums:Array<Album>;
  selectedAlbum:Album;

  ngOnInit(): void {

    this.albums=this.albumService.getAlbums();
  }
  onClick(album : Album) : void
  {
    this.selectedAlbum = album;
   
  }
  addAlbum(album:Album){
    album.bought=true;
    this.albumService.addAlbum(album);

  }

}
