import { Component, OnInit, OnDestroy } from '@angular/core';
import {GameService} from '../game.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {
  next: string;
  winner: string;
  square: string[];
  private subscription: Subscription;

  constructor(private game: GameService) { }

  ngOnInit() {
    this.reset();
    const nextSub = this.game.next.subscribe(value => this.next = value);
    const winnerSub = this.game.winner.subscribe(value => this.winner = value);

    this.subscription = nextSub;
    this.subscription.add(winnerSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  reset() {
    this.game.reset();
    this.square = this.game.squares;
  }
}
