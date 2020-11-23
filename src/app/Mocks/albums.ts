import { Album } from '../Models/Album';


export const albums: Array<Album> = 
[
  {
    id: 0,
    bought:false,
    albumName: "Bach",
    artistName: "Bandalos Chinos",
    date: new Date("2019-01-16"),
    description: "Bandalos Chinos, es una banda oriunda de Beccar, provincia de Buenos Aires, formada en el año 2009. El bastión principal que toman los integrantes es el rock y el pop, evolucionando con otros ritmos como el funk y el electro.",
    genre:"Pop",
    image:"https://i.pinimg.com/736x/76/7b/1c/767b1c636e47ab79a64327e659cd4f88.jpg",
    price:11.99,
    score:5,
    songs: [
        {
            sid:0,
            bought:false,
            songName:"El Temblor",
            artistName:"Bandalos Chinos",
            duration:"3:43",
            popularity:5,
            price:1

        },
        {
            sid:1,
            bought:false,
            songName:"Vamonos de viaje",
            artistName:"Bandalos Chinos",
            duration:"3:56",
            popularity:5,
            price:1

        },
        {
            sid:2,
            bought:false,
            songName:"Super V",
            artistName:"Bandalos Chinos",
            duration:"2:53",
            popularity:5,
            price:1

        },
        {
            sid:3,
            bought:false,
            songName:"Demasiado",
            artistName:"Bandalos Chinos",
            duration:"3:46",
            popularity:5,
            price:1

        },
        {
            sid:4,
            bought:false,
            songName:"El Club de la montaña",
            artistName:"Bandalos Chinos",
            duration:"3:54",
            popularity:5,
            price:1

        }

    ]

    
    
  },
  {
    id: 1,
    bought:false,
    albumName: "Paranoia Pop",
    artistName: "Bandalos Chinos",
    date: new Date("2019-01-16"),
    description: "Bandalos Chinos, es una banda oriunda de Beccar, provincia de Buenos Aires, formada en el año 2009. El bastión principal que toman los integrantes es el rock y el pop, evolucionando con otros ritmos como el funk y el electro.",
    genre:"Pop",
    image:"https://images.genius.com/7584e4610a7266b6e1d0fcae14328201.1000x1000x1.jpg",
    price:11.99,
    score:5,
    songs: [
        {
            sid:0,
            bought:false,
            songName:"Paranoia Pop",
            artistName:"Bandalos Chinos",
            duration:"3:52",
            popularity:5,
            price:1

        },
        {
            sid:1,
            bought:false,
            songName:"Sin Señal",
            artistName:"Bandalos Chinos",
            duration:"3:59",
            popularity:5,
            price:1

        },
        {
            sid:2,
            bought:false,
            songName:"A La Cabeza",
            artistName:"Bandalos Chinos",
            duration:"3:11",
            popularity:5,
            price:1

        },
        {
            sid:3,
            bought:false,
            songName:"Chu-CHu",
            artistName:"Bandalos Chinos",
            duration:"3:13",
            popularity:5,
            price:1

        },
        {
            sid:4,
            bought:false,
            songName:"La Herida",
            artistName:"Bandalos Chinos",
            duration:"4:07",
            popularity:5,
            price:1

        }

    ]

    
    
  },



] ;
