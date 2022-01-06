import { Injectable } from '@angular/core';
import {Player_Data} from './Player_Data';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {
  playerData;

  constructor() { 
    this.playerData = Player_Data;
  }

  getAllPlayerCards(){
    return this.playerData
  }
    
  

}