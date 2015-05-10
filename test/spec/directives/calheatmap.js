'use strict';

describe('Directive: calHeatmap', function () {

  // load the directive's module
  beforeEach(module('gulfstreamApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cal-heatmap></cal-heatmap>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the calHeatmap directive');
  }));
});
