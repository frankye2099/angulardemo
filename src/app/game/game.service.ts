import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  squares: string[];
  private xIsNext: boolean;
  private winnerSubject = new BehaviorSubject(null);
  winner = this.winnerSubject.asObservable();
  private nextSubject = new BehaviorSubject(null);
  next = this.nextSubject.asObservable();

  constructor() {
    this.reset();
  }

  reset() {
    this.squares = ['', '', '', '', '', '', '', '', ''];
    this.xIsNext = true;
    this.winnerSubject.next(null);
    this.nextSubject.next('X');
  }

  go(index) {
    const winner = this.calculateWinner(this.squares);
    if (!winner && this.squares[index] === '') {
      const next = this.getNext();
      this.squares[index] = next;
      this.xIsNext = !this.xIsNext;

      this.nextSubject.next(this.getNext());
      this.calculateWinner(this.squares);
    }

    return this.squares[index];
  }

  getNext() {
    return this.xIsNext ? 'X' : 'O';
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        this.winnerSubject.next(squares[a]);
        return squares[a];
      }
    }
    return null;
  }
}
