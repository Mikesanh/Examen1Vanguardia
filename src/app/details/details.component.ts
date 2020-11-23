import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../Models/Album';
import { albums } from '../Mocks/albums';
import { Subscription } from 'rxjs';
import { AlbumService } from '../Core/AlbumService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Song } from '../Models/Song';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private routeSub: Subscription;

  constructor(private _service: NotificationsService,private route:ActivatedRoute, 
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
    this._service.success(album.albumName,"Comprado",{
      position: ['bottom','right'],
      timeOut:1100,
      animate: 'fade',
      showProgressBar: true
    });

  }
  addSong(id:number,songid:number,songName:string){
    this.albumService.addSong(id,songid);
    console.log(id,songid);
    this._service.success(songName,"Comprada",{
      position: ['bottom','right'],
      timeOut:1100,
      animate: 'fade',
      showProgressBar: true
    });

  }

  // ngOnDestroy() {
  //   this.routeSub.unsubscribe();
  // }

}
