import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from '../../interfaces/videogame';

@Component({
  selector: 'games-card',
  templateUrl: 'games-card.component.html',
  styles: [
    `
    .card-img-top{
      max-height:300px
    }
    `
  ]
})

export class GamesCardComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input()
  public videogame!:Videogame;



}
