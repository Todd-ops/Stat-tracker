import { Component, } from '@angular/core';
import { PlayerInfoService } from './player-info.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "RWD Peewee B Stats" ;
  cards;


  constructor(public playerInfo: PlayerInfoService){

  }

  ngOnInit(){
    this.selectAllCards()
  }

  selectAllCards(){
    this.cards = this.playerInfo.getAllPlayerCards();
    
  }
}
