'use strict';

describe('Controller: RatingsCtrl', function () {

  // load the controller's module
  beforeEach(module('gulfstreamApp'));

  var RatingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RatingsCtrl = $controller('RatingsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
