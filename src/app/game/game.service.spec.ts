import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';

describe('GameService', () => {
  let service: GameService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('go and getNext', () => {
    it('should return X/O alternately', () => {
      expect(service.getNext()).toEqual('X');
      expect(service.go(0)).toEqual('X');
      expect(service.getNext()).toEqual('O');
      expect(service.go(1)).toEqual('O');
      expect(service.getNext()).toEqual('X');
    });
  });

  describe('calculateWinner', () => {
    it('should return null', () => {
      const squares = ['X', 'O', '', '', '', '', '', '', ''];
      expect(service.calculateWinner(squares)).toEqual(null);
    });
    it('should return X', () => {
      const squares =
        ['X', 'X', 'X',
          'O', 'O', '',
          '', '', ''];
      expect(service.calculateWinner(squares)).toEqual('X');
    });
    it('should return O', () => {
      const squares =
        ['O', 'X', 'X',
          'X', 'O', 'O',
          'X', 'X', 'O'];
      expect(service.calculateWinner(squares)).toEqual('O');
    });
  });
});
