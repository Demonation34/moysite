function fortimescale(){
    today=new Date();
    hourplus=new Date();
    hourplus.setDate(hourplus.getDate()-1); 
     hour1=hourplus.getHours();
    year1=hourplus.getFullYear();
    month1=hourplus.getMonth();
    day1=hourplus.getDate();
    sec1=hourplus.getMinutes();    
    hour=today.getHours();
    year=today.getFullYear();
    month=today.getMonth();
    day=today.getDate();
    sec=today.getMinutes(); 
    if(day<10){
      day="0"+day;
    }
    if(day1<10){
      day1="0"+day1;
    }
    month++;
    month1++;
    if(month<10){
      month="0"+month;
    }
    if(month1<10){
      month1="0"+month1;
    }
    if(hour<10){
      hour="0"+hour;
    }
    if(hour1<10){
      hour1="0"+hour1;
    }
    if(sec<10){
      sec="0"+sec;
    }
    if(sec1<10){
      sec1="0"+sec1;
    }
    str=year+"-"+month+"-"+day+"T"+hour+":"+sec;
    str1=year1+"-"+month1+"-"+day1+"T"+hour1+":"+sec1;
    document.getElementById("vtoroe").value=str;
    document.getElementById("pervoe").value=str1;
  }
  Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
  $(document).ready( function() {
    $('#datePicker').val(new Date().toDateInputValue());
});
  document.getElementById("pervoe").value =new Date().toDateInputValue();
  var vtoroevremya=document.getElementById("vtoroe");
  todaydata=new Date();
  todaydata.setHours(todaydata.getHours()-1);
  vtoroevremya.value=todaydata.toDateInputValue();
  
  $(document).ready(function($){
    $('.popup-close').click(function(){
      $(this).parents('.popup-fade').fadeOut();
      cancelbutt();
      return false;
    });
    $(document).keydown(function(e){
      if(e.keyCode==27){
        e.stopPropagation();
        $('.popup-fade').fadeOut();
        cancelbutt();
      }
    });
   
    $('.popup-fade').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
      cancelbutt();          
    }
  }); 

  });
  $('.popup-open').click(function(){
  $('.popup-fade').fadeIn();
  hideChart();
  var listnouse=document.getElementById("tasks__lists1");
var linouse=listnouse.querySelectorAll('li');
cancelnouse=linouse;

    return false;
    
  });
  