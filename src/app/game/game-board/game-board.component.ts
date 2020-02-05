import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  private next: string;
  private winner: string;
  square: string[];
  constructor(private game: GameService) { }

  ngOnInit() {
    this.reset();
    this.game.next.subscribe(value => this.next = value);
    this.game.winner.subscribe(value => this.winner = value);
  }

  reset() {
    this.game.reset();
    this.square = this.game.squares;
  }
}
