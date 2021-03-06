(function () {

  'use strict';

  angular
    .module('cosmicCalendar.services', [])
    .service('calendarService', calendarService);

  calendarService.$inject = ['$http'];

  function calendarService ($http) {
    /*jshint validthis: true */
    const getAllData = 'https://cosmic-calendar.herokuapp.com/api/v1/';
    const getAllMonths = 'https://cosmic-calendar.herokuapp.com/api/v1/months';
    const getAllEvents = 'https://cosmic-calendar.herokuapp.com/api/v1/events';
    const getMonthEvents = 'https://cosmic-calendar.herokuapp.com/api/v1/events/month/';
    const getGitHub = 'https://api.github.com/users/brandonb81';

    this.getAllData = () => $http.get(getAllData);

    this.getAllMonths = function () {
      return $http.get(getAllMonths)
      .then(data => {
        let months = data.data.data;
        months.forEach(month => month.monthHasEvents = month.num_events > 0);
        return months;
      });
    };

    this.getAllEvents = () => $http.get(getAllEvents);

    this.getMonthEvents = function (id) {
      return $http.get(getMonthEvents + id)
      .then(data => {
        let monthEvents = data.data.data;
        return monthEvents;
      });
    };
  }

})();
