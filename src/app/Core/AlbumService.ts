import { Injectable } from '@angular/core';
import { Album } from '../Models/Album';
import { albums } from '../Mocks/albums';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private  albums: Album[] = albums;
  private boughtAlbums: Album[]=[];
  selectedAlbum: Album;

  constructor() { }

  getAlbums(): Album[] {
    return this.albums;
  }
  getBoughtAlbums(): Album[] {
    return this.boughtAlbums;
  }

  getAlbumById(id: number) {
     this.selectedAlbum=this.albums[id];
     return this.selectedAlbum;
  }

  getRating(id: number,rating: number){
    this.albums[id].score=rating;
  }


  
  addAlbum(album:Album){
    //album.bought=true;
    this.boughtAlbums.push(album);

  }


}