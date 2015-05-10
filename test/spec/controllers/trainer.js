'use strict';

describe('Controller: TrainerCtrl', function () {

  // load the controller's module
  beforeEach(module('gulfstreamApp'));

  var TrainerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrainerCtrl = $controller('TrainerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
