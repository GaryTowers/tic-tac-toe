'use strict';

describe('Service: GameManager', function () {

  // load the service's module
  beforeEach(module('ticTacToeApp'));

  // instantiate service
  var GameManager;
  beforeEach(inject(function (_GameManager_) {
    GameManager = _GameManager_;
  }));

  it('should do something', function () {
    expect(!!GameManager).toBe(true);
  });

});
