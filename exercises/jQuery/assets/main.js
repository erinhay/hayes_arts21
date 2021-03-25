$(function() {
    let i = 0;

    $(".content").click(function() {
      console.log(i)

      let ids = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#ten", "#eleven", "#twelve", "#thirteen", "#fourteen", "#fifteen", "#sixteen", "#seventeen", "#eighteen", "#nineteen", "#twenty", "#twentyone","#twentytwo","#twentythree","#twentyfour","#twentyfive","#twentysix","#twentyseven","#twentyeight","#twentynine","#thirty", "#thirtyone", "#thirtytwo","#thirtythree","#thirtyfour","#thirtyfive","#thirtysix","#thirtyseven","#thirtyeight","#thirtynine","#fourty","#fourtyone"];

      $(ids[i-1]).css("display","none");
      $(ids[i]).css("display","flex");

      i++;
      
      if (i >= ids.length) {
        i = 0;
      }
    });
  });