'use strict';

describe('Controller: HorseCtrl', function () {

  // load the controller's module
  beforeEach(module('gulfstreamApp'));

  var HorseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HorseCtrl = $controller('HorseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
