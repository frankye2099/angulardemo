import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() id: number;
  @Input() value: string;

  constructor(private game: GameService) { }

  ngOnInit() {
  }

  click() {
    this.value = this.game.go(this.id);
  }
}
