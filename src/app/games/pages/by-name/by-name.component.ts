import { Component, OnInit } from '@angular/core';
import { VideogameService } from '../../services/videogames.service';
import { Videogame } from '../../interfaces/videogame';

@Component({
  selector: 'pages-by-name',
  templateUrl: 'by-name.component.html'
})



export class ByNameComponent implements OnInit {
  constructor(private videogameService: VideogameService) {}

  public videoGames: Videogame[] = [];

  ngOnInit() { }


  getVideogameName(url:string):void {

  this.videogameService.getGamesName(url)
  .subscribe(videogames =>{
    this.videoGames = videogames.results;
  })
  console.log(this.videoGames);


  }

}
