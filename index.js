const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function() { 
   return drivers.slice(0,2);
}

const returnLastTwoDrivers = function() {
   return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiple) {
   return function(fare) {
      return multiple * fare;
   }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, returnDrivers) {
   return returnDrivers(drivers);
}