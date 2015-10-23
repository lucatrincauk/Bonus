'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('bonusApp'));

  var MainCtrl;
  var scope;
  var httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });
    var mockData = { key: 'test'};
    httpBackend.expectGET('data/bonus.json').
        respond([mockData]);

  }));

  it('should create a bonus model with data from xhr', function() {
    expect(scope.bonus).toBeUndefined();
    httpBackend.flush();

    expect(scope.bonus).toEqual([{key: 'test'}]);
  });

  it('should return the amount of bonus', function() {
    var salary = 10000,
        score = 20;

    var money = scope.calculateMoney(salary, score);
    expect(money).toEqual(2000);
  });

});
