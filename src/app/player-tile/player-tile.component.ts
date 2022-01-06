import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-player-tile',
  templateUrl: './player-tile.component.html',
  styleUrls: ['./player-tile.component.css']
    
    
  
})
export class PlayerTileComponent  {
  @Input() player;
  @Output() select = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.select.emit();
  }

}