import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../Models/Album';
import { albums } from '../Mocks/albums';
import { Subscription } from 'rxjs';
import { AlbumService } from '../Core/AlbumService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Song } from '../Models/Song';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private routeSub: Subscription;

  constructor(private route:ActivatedRoute, 
    private albumService: AlbumService ) {
     
     }
  
  displayedColumns: string[] = ['songName', 'artistName', 'duration', 'popularity','price'];
  selectedAlbum:Album;


  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.selectedAlbum=this.albumService.getAlbumById(id)
  
    
  }

  getPunt(rating:number){
    console.log(this.selectedAlbum.id,rating);
    
   this.albumService.getRating(this.selectedAlbum.id,rating);

  }

  addAlbum(album:Album){
    album.bought=true;
    this.albumService.addAlbum(album);

  }
  addSong(id:number,songid:number){
    this.albumService.addSong(id,songid);
    console.log(id,songid);

  }

  // ngOnDestroy() {
  //   this.routeSub.unsubscribe();
  // }

}
