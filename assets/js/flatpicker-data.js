"use strict";
$(function () {
  flatpickr("#date1", {
    allowInput: true,
    dateFormat: "d-m-Y",
    onOpen: function (selectedDates, dateStr, instance) {
      instance.setDate(instance.input.value, false);
    },
  });
  flatpickr("#date2", {
    allowInput: true,
    dateFormat: "d-m-Y",
    onOpen: function (selectedDates, dateStr, instance) {
      instance.setDate(instance.input.value, false);
    },
  });
  flatpickr("#date-time", {
    enableTime: true,
    allowInput: true,
    dateFormat: "Y-m-d H:i",
    onOpen: function (selectedDates, dateStr, instance) {
      instance.setDate(instance.input.value, false);
    },
  });
});
