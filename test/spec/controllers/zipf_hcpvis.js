'use strict';

describe('Controller: ZipfHcpvisCtrl', function () {

  // load the controller's module
  beforeEach(module('gulfstreamApp'));

  var ZipfHcpvisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ZipfHcpvisCtrl = $controller('ZipfHcpvisCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
