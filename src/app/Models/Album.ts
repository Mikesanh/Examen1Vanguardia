import { Song } from './Song';

export class Album{

    id:number;
    bought:boolean;
    albumName:string;
    artistName:string;
    price:number;
    genre: string;
    score:number;
    date:Date;
    description:string;
    image:string;
    songs:Array<Song>;

}