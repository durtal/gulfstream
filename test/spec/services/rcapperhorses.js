'use strict';

describe('Service: RcappeRHorses', function () {

  // load the service's module
  beforeEach(module('gulfstreamApp'));

  // instantiate service
  var RcappeRHorses;
  beforeEach(inject(function (_RcappeRHorses_) {
    RcappeRHorses = _RcappeRHorses_;
  }));

  it('should do something', function () {
    expect(!!RcappeRHorses).toBe(true);
  });

});
