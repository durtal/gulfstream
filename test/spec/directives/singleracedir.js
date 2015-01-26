'use strict';

describe('Directive: singleRaceDir', function () {

  // load the directive's module
  beforeEach(module('gulfstreamApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<single-race-dir></single-race-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the singleRaceDir directive');
  }));
});
