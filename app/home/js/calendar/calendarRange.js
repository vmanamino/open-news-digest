var CalendarRange = {

  DAY : 24 * 60 * 60 * 1000,

  prepareDate : function(date) {
    date = new Date(date);
    var day = date.getDay();
    return {
      date : date,
      weekday : day != 0 && day != 6,
      day : date.getDate(),
      month : date.getMonth(),
      year : date.getFullYear()
    };
  },

  getMonthlyRange : function(date) {
    var month = date.getMonth();
    var startDay = new Date(date);
    startDay.setDate(1);

    var firstDay = new Date(startDay);
    if (firstDay.getDay() > 0) { //Not Sunday
      firstDay.setDate(firstDay.getDate() - (firstDay.getDay()));
    }

    var endDay = new Date(startDay);
    if(month == 11) {
      endDay.setMonth(0);
      endDay.setYear(endDay.getFullYear() + 1);
    } else {
      endDay.setMonth(month + 1);
    }

    endDay.setDate(endDay.getDate() - 1);

    var lastDay = new Date(endDay);
    lastDay.setDate(lastDay.getDate() + (6 - endDay.getDay()));

    var day = new Date(firstDay);
    var days = [];
    while(day <= lastDay) {
      days.push(this.prepareDate(day));
      day.setDate(day.getDate() + 1);
    }

    return {
      first : firstDay,
      start : startDay,
      end : endDay,
      last : lastDay,
      days : days
    };
  }

};