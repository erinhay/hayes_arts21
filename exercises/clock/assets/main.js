$(function() {
    var $hour = $('.hour svg circle');
    var $minute = $('.minute svg circle');
    var $second = $('.second svg circle');
    
    function updateClock() {
      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      var ms = date.getMilliseconds();
      var clockUpdateSpeed = 30; // speed in milliseconds
  
      $hour.css('stroke-width', (50/24 * h) + 'px');
      $minute.css('stroke-width', (50/60 * m) + 'px');
      $second.css('stroke-width', (50/60 * s) + 'px');
  
      setTimeout(updateClock, clockUpdateSpeed);
    }
  
    updateClock();
  });