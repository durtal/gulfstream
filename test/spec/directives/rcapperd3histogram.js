'use strict';

describe('Directive: rcapperD3Histogram', function () {

  // load the directive's module
  beforeEach(module('gulfstreamApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rcapper-d3-histogram></rcapper-d3-histogram>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rcapperD3Histogram directive');
  }));
});
