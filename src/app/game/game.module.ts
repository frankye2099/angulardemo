import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GameRoutingModule} from './game-routing.module';
import {GameComponent} from './game.component';
import {GameBoardComponent} from './game-board/game-board.component';
import {SquareComponent} from './square/square.component';
import {GameService} from './game.service';


@NgModule({
  declarations: [GameComponent, GameBoardComponent, SquareComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  providers: [GameService]
})
export class GameModule {
}
